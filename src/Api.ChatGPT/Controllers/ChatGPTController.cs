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

        [HttpGet("{name}")]
        public async Task<ClientsModel> GetClientNameAsunc([FromRoute] string name)
        {

        }

        [HttpPost]
        public async Task PostClients([FromBody] ChatRequest clients)
        {
            // await _chatGPTReposity.CreateAsync(clients);

            await _sendMessagesToGPT.FellAnalisesGPTAsync(clients);

        }

        [HttpPut("{name}")]
        public async Task<ClientsModel> PutAsync([FromRoute] string name, [FromBody] ClientsModel clients)
        {


            return clients;
        }

        [HttpDelete("{name}")]
        public async Task RemoveClientsAsync([FromRoute] string name)
        {

        }

    }
}
