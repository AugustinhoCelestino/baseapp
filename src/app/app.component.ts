import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import jsPDF from 'jspdf';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PdfViewerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isDraft = true;

  ngOnInit() {
    this.generatePDF();
  }

  generatePDF() {
    const doc = new jsPDF();
    doc.text('Geeee', 10, 80);

    doc.addPage();
    doc.addPage();
    this.addTemplete(doc);
    let ssss = doc.output('bloburl');
    document
      .getElementById('main-iframe')
      ?.setAttribute('src', ssss.toString());
  }

  addTemplete(doc: jsPDF) {
    const pageCount = doc.getNumberOfPages();

    doc.setFontSize(8);
    for (var i = 1; i <= pageCount; i++) {
      doc.setPage(i);

      /// HEADER
      if (i == 1) {
        doc.addImage('../assets/img/logo-cidade.png', 'png', 129, 1, 80, 80);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(18);
        doc.text('BUSINESS', 40, 24);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(32);
        doc.text('BANNER', 40, 36);
        doc.setFontSize(45);
        doc.setTextColor('#d4d4d4');
        doc.text('• • •', 100, 36);
        doc.setFontSize(11);
        doc.setTextColor('#6f6f6f');
        doc.text(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
          20,
          44
        );
        doc.text(
          'sed do eiusmod tempor incididunt ut labore et dolore magna,',
          20,
          48
        );
        doc.text(
          'aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',

          20,
          52
        );
      } else {
        doc.setFillColor('black');
        doc.rect(1, 30, 80, 1, 'F');
        doc.setFillColor('#246da6');
        doc.rect(80, 30, 20, 1, 'F');
        doc.setFillColor('#27a1bc');
        doc.rect(100, 30, 20, 1, 'F');
        doc.setFillColor('#fbba03');
        doc.rect(122, 30, 30, 1, 'F');
        doc.setFillColor('#ff8a00');
        doc.rect(152, 30, 30, 1, 'F');
        doc.setFillColor('#e95002');
        doc.rect(184, 30, 31, 1, 'F');
        doc.addImage('../assets/img/logo-cidade-r.png', 'png', 1, 1, 30, 30);
      }
      /// FOOTER
      doc.setFontSize(9);

      doc.setFillColor('#e95002');
      doc.rect(1, 272, 31, 1, 'F');
      doc.setFillColor('#ff8a00');
      doc.rect(35, 272, 30, 1, 'F');
      doc.setFillColor('#fbba03');
      doc.rect(65, 272, 30, 1, 'F');
      doc.setFillColor('#246da6');
      doc.rect(98, 272, 20, 1, 'F');
      doc.setFillColor('#27a1bc');
      doc.rect(118, 272, 20, 1, 'F');
      doc.setFillColor('black');
      doc.rect(138, 272, 200, 1, 'F');

      doc.setTextColor('black');
      doc.setFont('helvetica', 'bold');
      doc.text(
        'Copyright © 2024 - Sonic Boladão LTDA. Todos os direitos reservados.',
        10,
        280
      );
      doc.setFont('helvetica', 'normal');
      doc.text('CNPJ: 00.000.000/0000-00', 10, 284);
      doc.text(
        'Avenida Malek Assad, 956 - Jardim Santa Maria, Jacareí - SP, 12328-080',
        10,
        288
      );
      // doc.text('Documento gerado em: ' + today, 10, 292);
      doc.setFont('helvetica', 'bold');
      doc.text(
        'Página ' + String(i) + ' de ' + String(pageCount),
        doc.internal.pageSize.width - 20,
        285,
        {
          align: 'center',
        }
      );

      /// DRAFT MARK
      if (this.isDraft) {
        doc.addImage('../assets/img/rascunho.png', 'png', 0, 40, 220, 220);
      }
    }
  }
}
