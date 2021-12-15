import { Component, OnInit } from '@angular/core';
import { Chart, registerables  } from 'chart.js';
import { _DeepPartialObject } from 'chart.js/types/utils';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    this.productosVendidos()
    this.productosMasVendidos()

  }

  productosVendidos(): void {
    var ctx = <HTMLCanvasElement>document.getElementById("myChart");
    var myChart = new Chart(ctx, 
      {
        type: 'line',
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Junio', 'Julio'],
            datasets: [{
                label: 'Productos vendidos',
                data: [3, 2, 3, 5, 19, 12],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ] as _DeepPartialObject<CanvasGradient>,
                borderWidth: 1
            }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'PRODUCTOS VENDIDOS'
            }
          }
        }
      }  
    );
  }

  productosMasVendidos(): void {
    var ctx = <HTMLCanvasElement>document.getElementById("myChart2");
    var myChart = new Chart(ctx, 
      {
        type: 'doughnut',
        data: {
            labels: ['Martillo', 'Taladro', 'Escruadra', 'Pulidora', 'Teclado', 'Puntero'],
            datasets: [{
                label: 'Productos mas vendidos',
                data: [3, 2, 3, 5, 19, 12],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ] as _DeepPartialObject<CanvasGradient>,
                borderWidth: 1
            }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'PRODUCTOS MÁS VENDIDOS'
            }
          }
        }
      }  
    );
  }

}
