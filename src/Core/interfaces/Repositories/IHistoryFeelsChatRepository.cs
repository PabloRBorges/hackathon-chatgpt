using Core.models.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.interfaces.Repositories
{
    public interface IHistoryFeelsChatRepository
    {
        Task<ICollection<HistoryFeelsChatModel>> GetListHistoricAsync();
        Task<ICollection<HistoryFeelsChatModel>> GetHistoricAsync(string ClientId);
        Task CreateAsync(HistoryFeelsChatModel historic);
        Task UpdateAsync(string clientId, HistoryFeelsChatModel historic);
        Task RemoveAsync(string clientId);
    }
}
