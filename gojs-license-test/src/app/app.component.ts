import { Component, ViewChild, ElementRef, AfterViewInit, NgZone } from '@angular/core';

declare const go: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('diagramDiv') diagramDiv: ElementRef;
  
  // GoJS license key
  private licenseKey = '7cff47e0e2755ad56dda0d25443b7efb0aab2934cb820ce00f5845a7e8093b177698ea7b54d099d0d5f01ef41b7f90d989c66b2c974e553ee230dada46b280f9b23174bb160014daa00371c59ef92da1f47924fbd0a571f78a7e8ca0bba9d18c5c';
  
  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this.ngZone.run(() => {
      this.initializeDiagram();
    });
  }

  initializeDiagram(): void {
    // Set the GoJS license key FIRST, before creating any diagrams
    (go.Diagram as any).licenseKey = this.licenseKey;
    go.Link.setRoutingParameter(32, 508602);
    // Set the license key
    //go.Diagram.licenseKey = this.licenseKey;

    // Create the Diagram
    const $ = go.GraphObject.make;
    const myDiagram = $(go.Diagram, this.diagramDiv.nativeElement, {
      contentAlignment: go.Spot.Center,
      layout: $(go.LayeredDigraphLayout)
    });

    // Create simple node template
    myDiagram.nodeTemplate = $(go.Node, 'Auto',
      $(go.Shape, 'Rectangle',
        { fill: '#64B5F6', stroke: '#1976D2', strokeWidth: 2 },
        new go.Binding('fill', 'color')
      ),
      $(go.TextBlock,
        { margin: 8, font: 'bold 14px sans-serif', stroke: 'white' },
        new go.Binding('text', 'key')
      )
    );

    // Create link template
    myDiagram.linkTemplate = $(go.Link,
      $(go.Shape,
        { stroke: '#333', strokeWidth: 2 }
      )
    );

    // Create model data
    myDiagram.model = new go.GraphLinksModel(
      [
        { key: 'Node A', color: '#64B5F6' },
        { key: 'Node B', color: '#81C784' }
      ],
      [
        { from: 'Node A', to: 'Node B' }
      ]
    );
  }
}
