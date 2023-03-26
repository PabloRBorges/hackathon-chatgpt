using Core.models.Repositories;

namespace Core.interfaces.Repositories
{
    public interface IChatGPTRepository
    {
        Task<List<Clients>> GetListClientsAsync();
        Task<Clients> GetClientAsync(string nome);
        Task CreateAsync(Clients client);
        Task UpdateAsync(string nome, Clients client);
        Task RemoveAsync(string nome);
    }
}
