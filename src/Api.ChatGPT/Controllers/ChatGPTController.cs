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


        //Get All Clients with feels
        [HttpGet]
        public async Task<ICollection<ClientResponse>> GetListClients()
        {
            var result = await _chatGPTServices.GetAllClientsWithFeel();
            return result;
        }

        //Post data Clients
        [HttpPost]
        public async Task PostDataClient([FromBody] ChatRequest clients)
        {
            await _chatGPTServices.CreateChatAnalisesGPTAsync(clients);
        }
    }
}
