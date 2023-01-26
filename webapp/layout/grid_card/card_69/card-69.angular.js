import { Component, OnInit } from "@angular/core";
declare var Chart: any;
@Component({
    selector: "app-card-sixty-nine",
    templateUrl: "./card-sixty-nine.component.html",
})
export class CardSixtyNineComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {
        Chart.elements.Rectangle.prototype.draw = function () {
            var ctx = this._chart.ctx;
            var vm = this._view;
            var left, right, top, bottom, signX, signY, borderSkipped, radius;
            var borderWidth = vm.borderWidth;
            var cornerRadius = 20;

            if (!vm.horizontal) {
                left = vm.x - vm.width / 2;
                right = vm.x + vm.width / 2;
                top = vm.y;
                bottom = vm.base;
                signX = 1;
                signY = bottom > top ? 1 : -1;
                borderSkipped = vm.borderSkipped || "bottom";
            } else {
                left = vm.base;
                right = vm.x;
                top = vm.y - vm.height / 2;
                bottom = vm.y + vm.height / 2;
                signX = right > left ? 1 : -1;
                signY = 1;
                borderSkipped = vm.borderSkipped || "left";
            }

            if (borderWidth) {
                var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
                borderWidth = borderWidth > barSize ? barSize : borderWidth;
                var halfStroke = borderWidth / 2;
                var borderLeft = left + (borderSkipped !== "left" ? halfStroke * signX : 0);
                var borderRight = right + (borderSkipped !== "right" ? -halfStroke * signX : 0);
                var borderTop = top + (borderSkipped !== "top" ? halfStroke * signY : 0);
                var borderBottom = bottom + (borderSkipped !== "bottom" ? -halfStroke * signY : 0);
                if (borderLeft !== borderRight) {
                    top = borderTop;
                    bottom = borderBottom;
                }
                if (borderTop !== borderBottom) {
                    left = borderLeft;
                    right = borderRight;
                }
            }

            ctx.beginPath();
            ctx.fillStyle = vm.backgroundColor;
            ctx.strokeStyle = vm.borderColor;
            ctx.lineWidth = borderWidth;
            var corners = [
                [left, bottom],
                [left, top],
                [right, top],
                [right, bottom],
            ];

            var borders = ["bottom", "left", "top", "right"];
            var startCorner = borders.indexOf(borderSkipped, 0);
            if (startCorner === -1) {
                startCorner = 0;
            }

            function cornerAt(index) {
                return corners[(startCorner + index) % 4];
            }

            var corner = cornerAt(0);
            ctx.moveTo(corner[0], corner[1]);

            for (var i = 1; i < 4; i++) {
                corner = cornerAt(i);
                var nextCornerId = i + 1;
                if (nextCornerId == 4) {
                    nextCornerId = 0;
                }

                var nextCorner = cornerAt(nextCornerId);

                var width = corners[2][0] - corners[1][0];
                var height = corners[0][1] - corners[1][1];
                var x = corners[1][0];
                var y = corners[1][1];

                var radius: any = cornerRadius;

                if (radius > height / 2) {
                    radius = height / 2;
                }
                if (radius > width / 2) {
                    radius = width / 2;
                }

                ctx.moveTo(x + radius, y);
                ctx.lineTo(x + width - radius, y);
                ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
                ctx.lineTo(x + width, y + height - radius);
                ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
                ctx.lineTo(x + radius, y + height);
                ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
                ctx.lineTo(x, y + radius);
                ctx.quadraticCurveTo(x, y, x + radius, y);
            }

            ctx.fill();
            if (borderWidth) {
                ctx.stroke();
            }
        };
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["S", "S", "M", "T", "W ", "T", "F"],
                datasets: [
                    {
                        data: [8, 12, 6, 15, 12, 6, 12],
                        backgroundColor: ["#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA", "#4338CA"],
                        borderWidth: 0,
                        strokeColor: "#6366F1",
                    },
                    {
                        data: [10, 14, 3, 12, 6, 10, 14],
                        backgroundColor: [],
                        borderWidth: 0,
                        strokeColor: "#6366F1",
                    },
                ],
            },

            options: {
                elements: {
                    point: {
                        radius: 0,
                    },
                },
                generateLabels: {
                    hidden: true,
                },
                legend: {
                    display: false,
                },
                scales: {
                    yAxes: [
                        {
                            gridLines: {
                                display: false,
                            },
                            display: false,
                            ticks: {
                                min: 0,
                                max: 20,
                            },
                        },
                    ],
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                            barThickness: 6,
                            barPercentage: 1.0,
                            categoryPercentage: 1.0,
                        },
                    ],
                },
            },
        });
    }
}
