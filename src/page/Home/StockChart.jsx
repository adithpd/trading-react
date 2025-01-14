import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { Button } from "@/components/ui/button"

const timeSeries = [
    {
        keyword: "DIGITAL_CURRENCY_DAILY",
        key: "Daily Time Series",
        label: "1 Day",
        value: 1,
    },
    {
        keyword: "DIGITAL_CURRENCY_WEEKLY",
        key: "Weekly Time Series",
        label: "1 Week",
        value: 7,
    },
    {
        keyword: "DIGITAL_CURRENCY_MONTHLY",
        key: "Monthly Time Series",
        label: "1 Month",
        value: 30,
    },
]

export const StockChart = () => {
    const [activeLabel, setActiveLabel] = useState("1 Day")
    const series = [
        {
            data: [ 
                [1, 428], [2, 465], [3, 418], [4, 157], [5, 246], [6, 117], [7, 376], [8, 280],
                [9, 222], [10, 111], [11, 305], [12, 150], [13, 263], [14, 166], [15, 249], [16, 377],
                [17, 302], [18, 258], [19, 139], [20, 421], [21, 337], [22, 232], [23, 128], [24, 180],
            ]
        }
    ]

    const options = {
        chart: {
            id: "area-datetime",
            type: "area",
            height: 350,
            zoom: {
                autoScaleYaxis: true
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                type: "datetime",
                tickAmount: 6
            },
            colors: ["#758AA2"],
            markers: {
                colors: ["#fff"],
                strokeColor: "#fff",
                size: 0,
                strokeWidth: 1,
                style: "hollow",
            },
            tooltip: {
                theme: "dark"
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.9,
                    stops: [0,100]
                },
                grid: {
                    borderColor: "#47535E",
                    strokeDashArray: 4,
                    show: true
                }
            }
        }
    }

    const handleActiveLabel = (value) => {
        setActiveLabel(value);
    }

    return (
    <div>
        <div className="space-x-3">
            {timeSeries.map((item) => 
                <Button variant = {activeLabel==item.label?"":"outline"} onClick={() => handleActiveLabel(item.label)} key={item.label}>
                    {item.label}
                </Button>
            )}
        </div>
        <div id="chart-timelines">
            <ReactApexChart 
                options={options}
                series={series}
                height={450}
                type="area"
            />
        </div>
    </div>
  )
}
