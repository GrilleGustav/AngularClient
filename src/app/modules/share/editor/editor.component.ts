import { Component, forwardRef, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as TemplateEditor from 'src/ckeditor5/build/ckeditor';
import { environment } from 'src/environments/environment';

const noop = () => { };

export const CUSTOM_INPUT_CONTROL_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => EditorComponent),
  multi: true
};

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_ACCESSOR]
})
export class EditorComponent implements OnInit, OnChanges {
  @Input() dataPlaceholder: string[]; //= ['Date', 'RegisterConfirm', 'Test'];
  @Input() isReadOnly: boolean = false;
    // The internal data model.
    private innerValue: any = '';
    //Placeholders for the callbacks which are later provided
    //by the Control Value Accessor
    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;
  
  public Editor = TemplateEditor;
// Editor config.
editorConfig = {
  toolbar: {
    items: [
      'heading',
      '|',
      'fontSize',
      'fontFamily',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'highlight',
      '|',
      'alignment',
      '|',
      'numberedList',
      'bulletedList',
      'todoList',
      '|',
      'indent',
      'outdent',
      '|',
      'link',
      'blockQuote',
      'imageUpload',
      'insertTable',
      'mediaEmbed',
      '|',
      'undo',
      'redo',
      'horizontalLine',
      'fontColor',
      'fontBackgroundColor',
      'code',
      'codeBlock',
      'selectAll',
      'placeholder',
    ]
  },
  language: 'de',
  image: {
    styles: [
      'alignLeft', 'alignCenter', 'alignRight'
    ],
    resizeOptions: [
      {
        name: 'resizeImage:original',
        label: 'Original',
        value: null
      },
      {
        name: 'resizeImage:50',
        label: '50%',
        value: '50'
      },
      {
        name: 'resizeImage:75',
        label: '75%',
        value: '75'
      }
    ],
    toolbar: [
      'imageTextAlternative',
      'imageStyle:alignLeft',
      'imageStyle:alignCenter',
      'imageStyle:alignRight',
      'resizeImage',
      'linkImage'
    ]
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells'
    ]
  },
  simpleUpload: {
    uploadUrl: `${environment.apiUrl}/EmailTemplate/ImageUpload`,
    withCredentials: false,
    headers: {
      'X-CSRF-TOKEN': 'CSRF-Token',
      Authorization: ''
    }
  },
  licenseKey: '',
  placeholderProps: {
    types: [] as string[],
  }
};

  constructor() { }

  public onReady(editor: any) {
    editor.isReadOnly = this.isReadOnly;
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
      
    );
    this.Editor = editor;
    // editor.isReadOnly = this.isReadOnly;
  }
    
  ngOnInit(): void {
    this.editorConfig.placeholderProps.types = this.dataPlaceholder;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isReadOnly'] != undefined) {
      this.Editor.isReadOnly = changes['isReadOnly'].currentValue;
    }
    
    if (changes['dataPlaceholder'] != undefined) {
      this.editorConfig.placeholderProps.types = changes['dataPlaceholder'].currentValue;
    }
  }


  //get accesor
  get value(): any {
    return this.innerValue;
  };

  //set accesor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  // Set touched on blur
  onBlur() {
    this.onTouchedCallback();
  }

  //From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

}
