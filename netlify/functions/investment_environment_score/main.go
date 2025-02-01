package main

import (
	"gitbub.com/supermarine1377/blog/netlify/functions/investment_environment_score/handler"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/supermarine1377/yebis/pkg"
)

func main() {
	app, err := pkg.NewApp()
	if err != nil {
		panic(err)
	}

	h := handler.NewHandler(app)
	lambda.Start(h.HandleRequest)
}
