using System;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace My_TTGO_Watch_Site.Controllers.AlexaSmartHome
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlexaSmartHomeController : ControllerBase
    {

        private readonly String AlexSmartHomeApiRoot = "https://ff5q920ike.execute-api.eu-west-1.amazonaws.com/test";

        private readonly IServiceProvider ServiceProvider;

        public AlexaSmartHomeController(
           IServiceProvider serviceProvider)
        {
            ServiceProvider = serviceProvider;
        }


        [HttpGet("ContactSensoEvent/{endPointId}/{contactSensorEvent}")]
        public async Task ContactSensorEvent(string endPointId, string contactSensorEvent)
        {
            var httpClientFactory = ServiceProvider.GetService<IHttpClientFactory>();

            var alexaSmartHomeClient = httpClientFactory.CreateClient("alexaSmartHome");


            var request = new HttpRequestMessage
            {
                RequestUri = new Uri($"{AlexSmartHomeApiRoot}/contactsensorevent?endPointId={endPointId}&value={contactSensorEvent}"),
                Method = HttpMethod.Get,
                Headers = {
                    { HttpRequestHeader.Authorization.ToString(), Request.Headers[HttpRequestHeader.Authorization.ToString()].First() }
                }
            };

            var response = await alexaSmartHomeClient.SendAsync(request);
            response.EnsureSuccessStatusCode();

            return; 
        }


    }
}
