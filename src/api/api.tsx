import { useState, useEffect } from "react";

const FetchData = async(url:string): Promise<string[]> => {
    const response = await fetch(url);
      const data = await response.json();
      return data;
}

export default FetchData