using Microsoft.EntityFrameworkCore;
using Shopify.API.Models;

namespace Shopify.API.Data
{
	public class FullstackDbContext : DbContext
	{
		public FullstackDbContext(DbContextOptions options) : base(options)
		{
		}

		public DbSet<Product> Products { get; set; }
	}
}