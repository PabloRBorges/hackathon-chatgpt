using Core.interfaces.Repositories;
using Core.interfaces.Services;
using Core.models.Repositories;
using Core.models.Requests;
using Infrastructure.Repositories.MongoDb;
using Microsoft.AspNetCore.Mvc;


namespace Api.ChatGPT.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChatGPTRepositoriesController : ControllerBase
    {
        private readonly IChatGPTRepository _chatGPTReposity;
        private readonly ISendMessagesToGPT _sendMessagesToGPT;

        public ChatGPTRepositoriesController(IChatGPTRepository chatGPTRepository, ISendMessagesToGPT sendMessagesToGPT)
        {
            _chatGPTReposity = chatGPTRepository;
            _sendMessagesToGPT = sendMessagesToGPT;
        }

        [HttpGet]
        public async Task<List<ClientsModel>> GetListClients()
        {
            return await _chatGPTReposity.GetListClientsAsync();
        }

        [HttpGet("{name}")]
        public async Task<ClientsModel> GetClientNameAsunc([FromRoute] string name)
        {
            return await _chatGPTReposity.GetClientAsync(name);
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
            await _chatGPTReposity.UpdateAsync(name, clients);

            return clients;
        }

        [HttpDelete("{name}")]
        public async Task RemoveClientsAsync([FromRoute] string name)
        {
            await _chatGPTReposity.RemoveAsync(name);            
        }

    }
}
