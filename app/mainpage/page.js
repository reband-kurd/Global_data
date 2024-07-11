import MYbutton from "@/app/compunent/myButton";
import NewNav from "@/app/compunent/new-nav";
import gifone from "@/app/Images/graph.gif";
import imgone from "@/app/Images/Capture.PNG"
import imgtwo from "@/app/Images/image 3.png"
import imgthree from "@/app/Images/image 4.png"
import imgfour from "@/app/Images/image 6.png"
import imgfive from "@/app/Images/image 5.png"
import imgsix from "@/app/Images/Stack of money and gold coins 3d cartoon style icon 1.png"

import Image from "next/image";

function MainPage() {
    return (<>
        <NewNav></NewNav>
        <div className="flex flex-row justify-center items-center gap-9 mt-20">
            <Image src={gifone} alt={gifone}/>
            <div className="flex flex-col w-1/3 justify-center items-center gap-3">
                <p className="">Welcome to our powerhouse dashboard! Get real-time updates on currency markets,
                    social media metrics, floral trends, and robust sales growth this month. Dive into the pulse of BPM
                    and cryptocurrency prices, all in one dynamic platform. Master the interconnected realms of finance,
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    social dynamics, nature's beauty, and business success with our seamlessly powerful dashboard</p>
                <div className="flex flex-row gap-4 w-full justify-center items-center">
                    <MYbutton>sing in</MYbutton>
                    <MYbutton>login</MYbutton>
                </div>

            </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-7 ">
            <div className="flex flex-col w-1/3 justify-center items-center gap-3">
                <p className="">your essential stock market dashboard. With real-time charts, customizable features, and
                    intuitive design, stay informed and make confident investment decisions. Track stocks, monitor
                    indices, and analyze historical data with ease. From beginners to seasoned traders, Global Data is
                    your go-to platform for navigating the financial markets effectively.</p>

                <MYbutton>stock market</MYbutton>
            </div>
            <Image src={imgone} alt={imgone} className="w-1/3"/>
        </div>
        <div className="flex flex-row justify-center items-center gap-7 mt-20">
            <Image src={imgtwo} alt={imgtwo} className="w-1/3"/>
            <div className="flex flex-col w-1/3 justify-center items-center gap-3">
                <p className="">your essential stock market dashboard. With real-time charts, customizable features, and
                    intuitive design, stay informed and make confident investment decisions. Track stocks, monitor
                    indices, and analyze historical data with ease. From beginners to seasoned traders, Global Data is
                    your go-to platform for navigating the financial markets effectively.</p>

                <MYbutton>stock market</MYbutton>
            </div>
        </div>

        <div className="flex flex-row justify-center items-center gap-7 mt-20">
            <div className="flex flex-col w-1/3 justify-center items-center gap-3">
                <p className=""> your ultimate cryptocurrency dashboard. With real-time charts, customizable features,
                    and seamless interface, track your favorite cryptocurrencies effortlessly. Stay ahead with
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    up-to-date market trends, historical data, and personalized alerts, all in one place. Whether you're
                    a novice or seasoned trader, Global Data empowers you to make informed decisions confidently.</p>

                <MYbutton>crypto dashboard</MYbutton>
            </div>
            <Image src={imgthree} alt={imgtwo} className="w-1/4"/>

        </div>
        <div className="flex flex-row justify-center items-center gap-7 mt-20 h-80">
            <Image src={imgfour} alt={imgtwo} className="w-1/6"/>
            <Image src={imgfive} alt={imgtwo} className="w-1/6"/>
            <Image src={imgsix} alt={imgtwo} className="w-1/6"/>
        </div>
        <div className="bg-blue-500 h-80 flex flex-row justify-center items-center gap-7 mt-40 ">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="w-1/2">your ultimate cryptocurrency dashboard. With real-time charts, customizable features, and seamless interface, track your favorite cryptocurrencies effortlessly. Stay ahead with up-to-date market trends, historical data, and personalized alerts, all in one place. Whether you're a novice or seasoned trader, Global Data empowers you to make informed decisions confidently.</p>
        </div>
    </>)
}

export default MainPage