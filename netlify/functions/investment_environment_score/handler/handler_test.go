package handler

import (
	"context"
	"errors"
	"testing"

	"gitbub.com/supermarine1377/blog/netlify/functions/investment_environment_score/handler/mock"
	"github.com/aws/aws-lambda-go/events"
	"github.com/stretchr/testify/assert"
	"go.uber.org/mock/gomock"
)

func TestHandler_HandleRequest(t *testing.T) {
	type args struct {
		ctx context.Context
	}
	tests := []struct {
		name                                 string
		args                                 args
		prepareMockInvestmentScoreCalculator func(*mock.MockInvestmentScoreCalculator)
		want                                 *events.APIGatewayProxyResponse
		wantErr                              bool
	}{
		{
			name: "Failed to calculate investment score",
			args: args{
				ctx: context.Background(),
			},
			prepareMockInvestmentScoreCalculator: func(misc *mock.MockInvestmentScoreCalculator) {
				misc.EXPECT().CalculateInvestmentScore(gomock.Any()).Return(0, errors.New("hoge"))
			},
			want: &events.APIGatewayProxyResponse{
				StatusCode: 500,
				Body:       "hoge",
			},
			wantErr: false,
		},
		{
			name: "Successful to calculate investment score",
			args: args{
				ctx: context.Background(),
			},
			prepareMockInvestmentScoreCalculator: func(misc *mock.MockInvestmentScoreCalculator) {
				misc.EXPECT().CalculateInvestmentScore(gomock.Any()).Return(2, nil)
			},
			want: &events.APIGatewayProxyResponse{
				StatusCode: 200,
				Body:       `{"investment_environment_score":2}`,
			},
			wantErr: false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			ctrl := gomock.NewController(t)
			misc := mock.NewMockInvestmentScoreCalculator(ctrl)
			h := NewHandler(misc)
			tt.prepareMockInvestmentScoreCalculator(misc)

			got, err := h.HandleRequest(tt.args.ctx)
			if tt.wantErr {
				assert.Error(t, err)
				return
			}
			assert.Equal(t, tt.want, got)
		})
	}
}
