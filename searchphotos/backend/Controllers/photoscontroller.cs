using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using webapi_24.Models;
using System.Data;

namespace webapi_24.Controllers
{
    public class PhotosController : ApiController
    {
       
        SqlConnection con = new SqlConnection("Data Source=LAPTOP-H2BTVF3O\\SQLEXPRESS;Initial Catalog =learning; Integrated Security = true");
        SqlCommand cmd =null;
        SqlDataReader dr = null;

        // GET: api/Photos
        public List<photos> photoslist=new List<photos>();
        public List<photos> Get()

        {
            cmd = new SqlCommand("photos_get", con);
            cmd.CommandType = CommandType.StoredProcedure;
            con.Open();
            dr = cmd.ExecuteReader();
            while (dr.Read() == true)
            {
                photos photo =new photos();
                photo.id = int.Parse(dr["id"].ToString());
                photo.Title = dr["Title"].ToString();
                photo.Photos = dr["photos"].ToString();

                photoslist.Add(photo);
            }
            con.Close();

            return photoslist;
        }

        
    }
}
