using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.SqlClient;
using System.Data;
using webapi_24.Models;

namespace webapi_24.Controllers
{
    public class CarsController : ApiController

    {
        SqlConnection con = new SqlConnection("Data Source=LAPTOP-H2BTVF3O\\SQLEXPRESS;Initial Catalog =learning; Integrated Security = true");
        SqlCommand cmd = null;

        SqlDataReader dr = null;

        // GET: api/Cars
        public List<cars> carslist=new List<cars>();
        [HttpGet]
        

        public List<cars> Get()
        {
            cmd = new SqlCommand("cars_get", con);
            cmd.CommandType = CommandType.StoredProcedure;
            con.Open();
            dr = cmd.ExecuteReader();

            while (dr.Read() == true)
            {
                cars items = new cars();
                items.image= dr["image"].ToString();
                items.id = int.Parse(dr["id"].ToString());
                carslist.Add(items);
            }
            con.Close();
            return carslist;

        }

        

       

     
    }
}
