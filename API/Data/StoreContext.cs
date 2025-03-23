using System;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
    public required DbSet<Product> Products { get; set; }
    public required DbSet<Basket> Baskets { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<IdentityRole>()
        .HasData(
            new IdentityRole { Id = "7e04b368-9026-40c7-a959-c8ea5068c9fd", Name = "Member", NormalizedName = "MEMBER" },
            new IdentityRole { Id = "458fbeb1-88b4-496b-8326-81a22e77ab01", Name = "Admin", NormalizedName = "ADMIN" }
        );
    }
}

