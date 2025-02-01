//go:generate mockgen -source=handler.go -package=mock -destination=mock/handler.go
package handler

import (
	"context"
	"encoding/json"

	"github.com/aws/aws-lambda-go/events"
)

type Handler struct {
	isc InvestmentScoreCalculator
}

type InvestmentScoreCalculator interface {
	CalculateInvestmentEnvironmentScore(ctx context.Context) (int, error)
}

func NewHandler(isc InvestmentScoreCalculator) *Handler {
	return &Handler{
		isc: isc,
	}
}

func (h *Handler) HandleRequest(ctx context.Context) (*events.APIGatewayProxyResponse, error) {
	score, err := h.isc.CalculateInvestmentEnvironmentScore(ctx)
	if err != nil {
		return &events.APIGatewayProxyResponse{
			StatusCode: 500,
			Body:       err.Error(),
		}, nil
	}
	m := map[string]int{"investment_environment_score": score}
	body, err := json.Marshal(m)
	if err != nil {
		return &events.APIGatewayProxyResponse{
			StatusCode: 500,
			Body:       err.Error(),
		}, nil
	}
	return &events.APIGatewayProxyResponse{
		StatusCode: 200,
		Body:       string(body),
	}, nil
}
