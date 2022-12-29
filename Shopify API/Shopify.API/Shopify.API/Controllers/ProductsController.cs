using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Shopify.API.Data;
using Shopify.API.Models;

namespace Shopify.API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class ProductsController : Controller
    {
        private FullstackDbContext _fullstackDbContext;
        public ProductsController(FullstackDbContext fullstackDbContext)
        {
            _fullstackDbContext = fullstackDbContext;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllProducts()
        {
            var products = await _fullstackDbContext.Products.ToListAsync();
            return Ok(products);
        }

        [HttpPost]
        public async Task<IActionResult> AddProduct([FromBody] Product productRequest)
        {
            productRequest.Id = Guid.NewGuid();
            await _fullstackDbContext.Products.AddAsync(productRequest);
            await _fullstackDbContext.SaveChangesAsync();
            return Ok(productRequest);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetProduct([FromRoute] Guid id)
        {
            var product = await _fullstackDbContext.Products.FirstOrDefaultAsync(x => x.Id == id);
            if(product == null)
            {
                return NotFound();
            }
            return Ok(product);
        }

        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> UpdateProduct([FromRoute] Guid id, Product updateProductRequest)
        {
            var product = await _fullstackDbContext.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            product.Title = updateProductRequest.Title;
            product.Price = updateProductRequest.Price;
            product.Description = updateProductRequest.Description;
            product.Category = updateProductRequest.Category;
            product.Image = updateProductRequest.Image;
            
            await _fullstackDbContext.SaveChangesAsync();
            return Ok(product);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<IActionResult> DeleteProduct([FromRoute] Guid id)
        {
            var product = await _fullstackDbContext.Products.FindAsync(id);

            if(product == null){
                return NotFound();
            }
            _fullstackDbContext.Products.Remove(product);
            await _fullstackDbContext.SaveChangesAsync();
            return Ok(product);
        }



    }
}
