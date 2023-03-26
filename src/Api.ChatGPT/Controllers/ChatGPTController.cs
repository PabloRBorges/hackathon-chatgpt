using Core.interfaces.Services;
using Microsoft.AspNetCore.Mvc;


namespace Api.ChatGPT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChatGPTController : ControllerBase
    {
        private readonly IChatGPT _chatGPT;

        public ChatGPTController(IChatGPT chatGPT)
        {
            _chatGPT = chatGPT;
        }

        // GET: api/<ChatGPTController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<ChatGPTController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {


            return "value";
        }

        // POST api/<ChatGPTController>
        [HttpPost]
        public async Task<string> Post([FromBody] string value)
        {
            var result = await _chatGPT.SendMessageAsync(value);

            return result;
        }

        // PUT api/<ChatGPTController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ChatGPTController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
