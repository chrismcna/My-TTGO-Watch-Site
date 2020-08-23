using System;
using Microsoft.Extensions.DependencyInjection;
using System.Net.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using My_TTGO_Watch_Site.Controllers.CryptoTicker.Models;
using System.Threading.Tasks;
using My_TTGO_Watch_Site.Services.Binance;

namespace My_TTGO_Watch_Site.Controllers.CryptoTicker
{
    [ApiController]
    [Route("api/[controller]")]
    public class CryptoTickerController : ControllerBase
    {
        private readonly IServiceProvider ServiceProvider;
        private readonly ILogger<CryptoTickerController> Logger;

        public CryptoTickerController(
            IServiceProvider serviceProvider,
            ILogger<CryptoTickerController> logger)
        {
            ServiceProvider = serviceProvider;
            Logger = logger;
        }

        [HttpGet("Price/{symbol}")]
        public async Task<PriceModel> GetPrice(string symbol)
        {
            var binanceService = ServiceProvider.GetService<BinanceService>();
            var tickerPrice = await binanceService.GetTickerPrice(symbol);

            return new PriceModel()
            {
                Price = Double.Parse(tickerPrice.price).ToString()
            };
        }


        [HttpGet("24hrStatistics/{symbol}")]
        public async Task<_24hrStatisticsModel> Get24hrStatistics(string symbol)
        {
            var binanceService = ServiceProvider.GetService<BinanceService>();
            var statistics = await binanceService.Get24hrStatistics(symbol);

            return new _24hrStatisticsModel()
            {
                LastPrice = Double.Parse(statistics.lastPrice).ToString(),
                PriceChangePercent = Double.Parse(statistics.priceChangePercent).ToString(),
                Volume = Double.Parse(statistics.volume).ToString(),
            };
        }
    }
}
