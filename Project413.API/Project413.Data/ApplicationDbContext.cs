using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Project413.Data.Models;

namespace Project413.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser, IdentityRole<Guid>, Guid>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<StudioUser>()
                .HasKey(su => new { su.StudioId, su.ApplicationUserId });

            builder.Entity<StudioUser>()
                .HasOne(x => x.Studio)
                .WithMany(x => x.StudioUser)
                .HasForeignKey(x => x.StudioId);

            builder.Entity<StudioUser>()
                .HasOne(x => x.ApplicationUser)
                .WithMany(x => x.StudioUser)
                .HasForeignKey(x => x.ApplicationUserId);

            builder.Entity<StudioCategory>()
                .HasKey(x => new { x.CategoryId, x.StudioId });

            builder.Entity<StudioCategory>()
                .HasOne(x => x.Studio)
                .WithMany(x => x.StudioCategories)
                .HasForeignKey(x => x.StudioId);

            builder.Entity<StudioCategory>()
                .HasOne(x => x.Category)
                .WithMany(x => x.StudioCategories)
                .HasForeignKey(x => x.CategoryId);

            builder.Entity<Studio>()
                .HasOne(x => x.Map)
                .WithOne(x => x.Studio)
                .HasForeignKey<Map>(x => x.StudioId);

            base.OnModelCreating(builder);
        }
    }
}