using Core.interfaces.Repositories;
using Core.interfaces.Services;
using Core.models.Repositories;
using Core.models.Requests;
using Core.models.Responses;
using Infrastructure.Repositories.MongoDb;
using Microsoft.AspNetCore.Mvc;


namespace Api.ChatGPT.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChatGPTController : ControllerBase
    {
        private readonly IChatGPTServices _chatGPTServices;

        public ChatGPTController(IChatGPTServices sendMessagesToGPT)
        {
            _chatGPTServices = sendMessagesToGPT;
        }

        [HttpGet]
        public async Task<ICollection<ClientResponse>> GetListClients()
        {
            var result = await _chatGPTServices.GetAllClientsWithFeel();
            return result;
        }

        [HttpGet("{clientId}")]
        public async Task<ICollection<HistoricFeelResponse>> GetHistoricByClientId([FromRoute] string clientId)
        {
            if (clientId == null)
                return null;

            var result = await _chatGPTServices.HistoricFeelResponse(clientId);
            return result;
        }

        [HttpPost]
        public async Task Post([FromBody] ChatRequest clients)
        {
            await _chatGPTServices.ChatAnalisesGPTAsync(clients);
        }
    }
}
