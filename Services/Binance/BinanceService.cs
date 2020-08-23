﻿using System;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Models = My_TTGO_Watch_Site.Services.Binance.Models;

namespace My_TTGO_Watch_Site.Services.Binance
{

    //https://github.com/binance-exchange/binance-official-api-docs/blob/master/rest-api.md#current-average-price
    public class BinanceService
    {


        private readonly IServiceProvider ServiceProvider;

        public BinanceService(
           IServiceProvider serviceProvider)
        {
            ServiceProvider = serviceProvider;
        }



        public async Task<Models.Ticker.PriceModel> GetTickerPrice(String symbol)
        {
            var httpClientFactory = ServiceProvider.GetService<IHttpClientFactory>();

            var binanceHttpClient = httpClientFactory.CreateClient("binance");

            var response = await binanceHttpClient.GetStringAsync($"https://api.binance.com/api/v3/ticker/price?symbol={symbol}");


            return JsonSerializer.Deserialize<Models.Ticker.PriceModel>(response);
        }


        public async Task<Models.Ticker._24hrStatisticsModel> Get24hrStatistics(String symbol)
        {
            var httpClientFactory = ServiceProvider.GetService<IHttpClientFactory>();

            var binanceHttpClient = httpClientFactory.CreateClient("binance");

            var response = await binanceHttpClient.GetStringAsync($"https://api.binance.com/api/v3/ticker/24hr?symbol={symbol}");


            return JsonSerializer.Deserialize<Models.Ticker._24hrStatisticsModel>(response);
        }
    }
}
