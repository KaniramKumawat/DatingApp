using API.DTOs;
using API.Entitied;
using API.Entities;
using AutoMapper;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser, MemberDto>()
                .ForMember(dest => dest.PhotoUrl, 
                    opt => opt.MapFrom(src => src.Photos.FirstOrDefault(x=>x.IsMain).Url));
            CreateMap<Photo, PhotoDto>();
        }   
    }
}