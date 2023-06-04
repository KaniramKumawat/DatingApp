using API.Entitied;

namespace API.Interfaces
{
    public interface ITokenService
    {
         string CreateToken(AppUser user);
    }
}