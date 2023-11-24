import React from "react";
import { Card, Space } from "antd";
const { Meta } = Card;
import { Rate } from "antd";
export const MovieCard = ({ m }) => (
  <Card
    className="bg-[#FAF5E9]"
    hoverable
    style={{
      width: 240,
      height: "max-content",
      background: "",
      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    }}
    cover={<img alt="example" src={m.posterURL} className="h-[300px]" />}
  >
    <Meta title={m.title} description={m.description.slice(0, 100)} />

    <Rate disabled defaultValue={m.rating} className="mt-5 bg-[] p-4" />
  </Card>
);
