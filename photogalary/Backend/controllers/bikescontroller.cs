using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using webapi_24.Models;

namespace webapi_24.Controllers
{
    public class BikesController : ApiController
    {
        SqlConnection con = new SqlConnection("Data Source=LAPTOP-H2BTVF3O\\SQLEXPRESS;Initial Catalog =learning; Integrated Security = true");
        SqlCommand cmd = null;

        SqlDataReader dr = null;
        // GET: api/Bikes

        public List<bikes> bikeslist = new List<bikes>();

        public List<bikes> Get()
        {
            cmd = new SqlCommand("bikes_get", con);
            cmd.CommandType = CommandType.StoredProcedure;
            con.Open();
            dr = cmd.ExecuteReader();
            while (dr.Read() == true)
            {
                bikes items = new bikes();
                items.id = int.Parse(dr["id"].ToString());
                items.image = dr["image"].ToString();
                bikeslist.Add(items);
            }
            con.Close();

            return bikeslist;
        }



    }
}
