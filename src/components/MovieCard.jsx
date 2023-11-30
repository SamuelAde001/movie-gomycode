import React from "react";
import { Card, ConfigProvider, Space } from "antd";
const { Meta } = Card;
import { Rate } from "antd";
export const MovieCard = ({ m }) => (
  <>
    {/* config provider is for the card style configoration on ant design */}
    <ConfigProvider
      theme={{
        token: {
          colorText: "White",
        },
      }}
    >
      <Card
        className="hover:translate-y-4 transition duration-200 ease-in-out"
        style={{
          width: "auto",
        }}
        size="small"
        bordered={false}
        bodyStyle={{ background: "#2C3E50", height: "100px" }}
        type="inner"
        hoverable
        cover={
          <img
            alt="example"
            src={m.posterURL}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
            }}
          />
        }
      >
        {/* Meta details */}
        <Meta title={m.title} />
        <Rate disabled defaultValue={m.rating} allowHalf className="mt-5 p-4" />
      </Card>
    </ConfigProvider>
  </>
);
