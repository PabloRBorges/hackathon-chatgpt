

using Core.models.Repositories;

namespace Core.interfaces.Repositories
{
    public interface IChatGPTRepository
    {
        Task<ICollection<ClientsModel>> GetListClientsAsync();
        Task<ClientsModel> GetClientAsync(string nome);
        Task CreateAsync(ClientsModel client);
        Task UpdateAsync(string nome, ClientsModel client);
        Task RemoveAsync(string nome);
    }
}
