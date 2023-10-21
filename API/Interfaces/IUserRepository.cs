using API.DTOs;
using API.Entitied;

namespace API.Interfaces
{
    public interface IUserRepository
    {
        void Update(AppUser user);

        Task<bool> SaveAllAsynch();

        Task<IEnumerable<AppUser>> GetUsersAsynch();

        Task<AppUser> GetUserByIdAsynch(int id);
        Task<AppUser> GetUserByUsernameAsynch(string  username);

        Task<IEnumerable<MemberDto>> GetMembersAsynch();

        Task<MemberDto> GetMemberAsynch(string username);
    }
}