import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as go from 'gojs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('diagramDiv') diagramDiv: ElementRef;
  
  // Set your GoJS license key here
  private licenseKey = '2b8647e1b56649c702d90776423d68f919a175639d811fa30e0414f3b90d3d06329fbb2855d38d9387a81bfe497d90d1dcc03b209148023cb731d7d94be08eaae53327e5470b4489a20b24969cff7ff2ff7872f3c1b024f2d36a9cf4bef8c59c0eb8f2c6589d08bb2b28';

  ngAfterViewInit(): void {
    this.initializeDiagram();
  }

  initializeDiagram(): void {
    // Set the license key
    go.Diagram.licenseKey = this.licenseKey;

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
