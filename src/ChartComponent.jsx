import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const ChartComponent = (props) => {
    const { data } = props;
    const chartContainerRef = useRef();

    useEffect(() => {
        const handleResize = () => {
            chart.applyOptions({ width: chartContainerRef.current.clientWidth });
        };

        const chart = createChart(chartContainerRef.current, {
            width: 1000,
            height: 400,
            layout: {
                background: {
                    type: 'solid',
                    color: '#000000',
                },
                textColor: '#d1d4dc',
            },
            grid: {
                vertLines: {
                    visible: false,
                },
                horzLines: {
                    color: 'rgba(42, 46, 57, 0.5)',
                },
            },
            rightPriceScale: {
                borderVisible: false,
            },
            timeScale: {
                borderVisible: false,
            },
            crosshair: {
                horzLine: {
                    visible: false,
                },
            },
        });
        chart.timeScale().fitContent();

        const newSeries = chart.addAreaSeries({
            topColor: 'rgba(76, 175, 80, 0.56)',
            bottomColor: 'rgba(76, 175, 80, 0.04)',
            lineColor: 'rgba(76, 175, 80, 1)',
            lineWidth: 2,
        });
        newSeries.setData(data);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            chart.remove();
        };
    }, [data]);

    return (
        <>
            <div ref={chartContainerRef}></div>
        </>
    );
};

export default ChartComponent;