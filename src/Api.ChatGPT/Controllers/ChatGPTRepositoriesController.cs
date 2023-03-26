using Core.interfaces.Repositories;
using Core.models.Repositories;
using Infrastructure.Repositories.MongoDb;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;

namespace Api.ChatGPT.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ChatGPTRepositoriesController : ControllerBase
    {
        private readonly IChatGPTRepository _chatGPTReposity;
        public ChatGPTRepositoriesController(IChatGPTRepository chatGPTRepository)
        {
            _chatGPTReposity = chatGPTRepository;
        }

        [HttpGet]
        public async Task<List<Clients>> GetListClients()
        {
            return await _chatGPTReposity.GetListClientsAsync();
        }

        [HttpGet("{name}")]
        public async Task<Clients> GetClientNameAsunc([FromRoute] string name)
        {
            return await _chatGPTReposity.GetClientAsync(name);
        }

        [HttpPost]
        public async Task<Clients> PostClients([FromBody] Clients clients)
        {
            await _chatGPTReposity.CreateAsync(clients);

            return clients;
        }

        [HttpPut("{name}")]
        public async Task<Clients> PutAsync([FromRoute] string name, [FromBody] Clients clients)
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
