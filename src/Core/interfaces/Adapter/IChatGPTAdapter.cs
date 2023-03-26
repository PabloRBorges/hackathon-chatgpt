using Core.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.interfaces.Adapter
{
    public interface IChatGPTAdapter
    {
        Task<string> VerifyFeelClientAsync(string message);

        Task<string> VerifyChatMessages(string message);
    }
}
