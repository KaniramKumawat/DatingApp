using API.DTOs;
using API.Entitied;
using API.Helpers;

namespace API.Interfaces
{
    public interface IUserRepository
    {
        void Update(AppUser user);

        Task<bool> SaveAllAsynch();

        Task<IEnumerable<AppUser>> GetUsersAsynch();

        Task<AppUser> GetUserByIdAsynch(int id);
        Task<AppUser> GetUserByUsernameAsynch(string  username);

        Task<PagedList<MemberDto>> GetMembersAsynch(UserParams userParams);

        Task<MemberDto> GetMemberAsynch(string username);
    }
}