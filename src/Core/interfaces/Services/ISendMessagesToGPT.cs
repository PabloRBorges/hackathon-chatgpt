using Core.models.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.interfaces.Services
{
    public interface ISendMessagesToGPT
    {
        Task FellAnalisesGPTAsync(ChatRequest chatRequest);
        Task ChatAnalisesGPTAsync(ChatRequest chatRequest);
    }
}
