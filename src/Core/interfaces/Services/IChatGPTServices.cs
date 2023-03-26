using Core.models.Requests;
using Core.models.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.interfaces.Services
{
    public interface IChatGPTServices
    {
        Task FellAnalisesGPTAsync(ChatRequest chatRequest);
        Task ChatAnalisesGPTAsync(ChatRequest chatRequest);
        Task<ICollection<ClientResponse>> GetAllClientsWithFeel();
    }
}
