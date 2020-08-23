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
    }
}
