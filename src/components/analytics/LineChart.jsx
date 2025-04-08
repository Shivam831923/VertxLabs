import { useEffect, useRef } from "react"

export function LineChart({ selectedMetrics, metricsData, isMobile }) {
 const chartRef = useRef(null)

 useEffect(() => {
 if (!chartRef.current) return

 const drawChart = () => {
 const canvas = chartRef.current
 if (!canvas) return

 const ctx = canvas.getContext("2d")
 if (!ctx) return

 ctx.clearRect(0, 0, canvas.width, canvas.height)

 const rect = canvas.getBoundingClientRect()
 canvas.width = rect.width
 canvas.height = rect.height

 const padding = { top: 20, right: 20, bottom: 30, left: 60 }
 const chartWidth = canvas.width - padding.left - padding.right
 const chartHeight = canvas.height - padding.top - padding.bottom

 const yLabels = ["2k", "1.6k", "1.2k", "800", "400", "200"]
 const yLabelStep = chartHeight / (yLabels.length - 1)

 const allDates = Array.from({ length: 30 }, (_, i) => `Mar ${i + 1}`)
 const xLabels = isMobile
 ? ["Mar 1", "Mar 10", "Mar 20", "Mar 30"]
 : ["Mar 1", "Mar 5", "Mar 10", "Mar 15", "Mar 20", "Mar 25", "Mar 30"]

 const xLabelIndices = xLabels.map((label) => {
 const day = Number.parseInt(label.split(" ")[1])
 return day - 1
 })

 ctx.strokeStyle = "#333"
 ctx.lineWidth = 1
 yLabels.forEach((_, i) => {
 const y = padding.top + i * yLabelStep
 ctx.beginPath()
 ctx.moveTo(padding.left, y)
 ctx.lineTo(canvas.width - padding.right, y)
 ctx.stroke()
 })

 ctx.fillStyle = "#666"
 ctx.font = "10px Manrope"
 ctx.textAlign = "right"
 yLabels.forEach((label, i) => {
 const y = padding.top + i * yLabelStep
 ctx.fillText(label, padding.left - 10, y + 4)
 })

 ctx.textAlign = "center"
 xLabels.forEach((label, i) => {
 const xIndex = xLabelIndices[i]
 const x = padding.left + (xIndex / (allDates.length - 1)) * chartWidth
 ctx.fillText(label, x, canvas.height - padding.bottom + 15)
 })

 selectedMetrics.forEach((metric) => {
 const data = metricsData[metric]?.data || []
 const color = metricsData[metric]?.color || "#FFFFFF"

 ctx.beginPath()
 ctx.strokeStyle = color
 ctx.lineWidth = 2

 const maxValue = 2200
 const dataPoints = data.map((value, i) => {
 const x = padding.left + (i / (data.length - 1)) * chartWidth
 const y = padding.top + chartHeight - (value / maxValue) * chartHeight
 return { x, y }
 })

 dataPoints.forEach((point, i) => {
 if (i === 0) {
 ctx.moveTo(point.x, point.y)
 } else {
 ctx.lineTo(point.x, point.y)
 }
 })

 ctx.stroke()
 })
 }

 drawChart()

 const handleResize = () => {
 drawChart()
 }

 window.addEventListener("resize", handleResize)
 return () => {
 window.removeEventListener("resize", handleResize)
 }
 }, [selectedMetrics, metricsData, isMobile])

 return <canvas ref={chartRef} className="w-full h-full" />
}