import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../index.css";

export const Home = () => {
  const { id } = useParams();
  console.log("====================================");
  console.log(id);
  console.log("====================================");
  const navigate = useNavigate();
  const [productApi, setProductApi] = useState([]);

  const getProductApi = async () => {
    await axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProductApi(res.data.products);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const getProductApiForSingle = async (id) => {
    await axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        console.log("====================================");
        console.log(res);
        console.log("====================================");
        setProductApi([res.data]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (id) {
      getProductApiForSingle(id);
    } else {
      getProductApi();
    }
  }, [id]);
  return (
    <>
      <div className="container">
        {productApi?.map((productApiDetails) => {
          return (
            <>
              <div className="cardBox">
                <div>
                  <div className="imgContain">
                    <label htmlFor="">
                      <h4>{productApiDetails.title}</h4>
                    </label>
                    <img src={productApiDetails.thumbnail} alt="Image" />
                  </div>
                  <div>
                    <p>
                      <b>{productApiDetails.description}</b>
                    </p>
                  </div>
                  <br />
                </div>
                <div className="priceBox">
                  <p>$ {productApiDetails.price}</p>
                  <p>
                    {Array(Math.round(productApiDetails.rating))
                      .fill("⭐")
                      .map((val) => {
                        return val;
                      })}{" "}
                    {Math.round(productApiDetails.rating)}
                  </p>
                </div>
                <div>
                  {/* <Link to = {`/${idx}`}> */}
                  <button
                    className="buyButton"
                    onClick={() => navigate(`/${productApiDetails.id}`)}
                  >
                    Buy
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
