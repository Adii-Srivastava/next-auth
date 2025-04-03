import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  images:{
    // domains:['avatars.githubusercontent.com']
    dangerouslyAllowSVG:true,
    remotePatterns:[
    {
      protocol:"https",
      hostname:"*"
    }
  ]
  }
};

export default nextConfig;
