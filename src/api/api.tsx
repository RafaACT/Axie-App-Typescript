import { useState, useEffect } from "react";

const FetchData = async(url:string): Promise<Array<string>> => {
    const response = await fetch(
        url
      );
      const data = await response.json();
    
      return data;
}

export default FetchData