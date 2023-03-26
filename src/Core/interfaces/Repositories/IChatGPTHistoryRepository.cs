using Core.models.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.interfaces.Repositories
{
    public interface IChatGPTHistoryRepository
    {
        Task<ICollection<HistoryModel>> GetListHistoricAsync();
        Task<ICollection<HistoryModel>> GetHistoricAsync(string ClientId);
        Task CreateAsync(HistoryModel historic);
        Task UpdateAsync(string clientId, HistoryModel historic);
        Task RemoveAsync(string clientId);

    }
}
