/*
# (C) Copyright IBM Corp. 2019
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License. */
import { AfterViewChecked, AfterViewInit, Component, EventEmitter, ElementRef, OnInit, Renderer, ViewChild } from '@angular/core';
import { JsonpModule, Jsonp } from '@angular/http';
import { Router } from '@angular/router';
import { MaterializeAction } from 'angular2-materialize';
import { CookieService } from 'angular2-cookie';

import { CodeFormatPipe } from './code-format.pipe';
import { CopyService } from '../_services/copy.service';
import { ExportService } from '../_services/export.service';
import { ModelService } from '../_services/model.service';
import { SearchService } from './search.service';
import { StylingService } from '../_services/styling.service';

import * as $ from 'jquery';

@Component({
    selector: 'app-search',
    providers: [ CopyService, ExportService, ModelService, SearchService, StylingService ],
    templateUrl: './search.component.html',
    styleUrls: ['../app.component.css', './search.component.css']
})
export class SearchComponent implements AfterViewChecked, AfterViewInit, OnInit {
    @ViewChild('rankerSelect') rankerSelect;
    @ViewChild('searchField') searchField;
    @ViewChild('recommendField') recommendField;
    @ViewChild('areaField') areaField;
    @ViewChild('taskField') taskField;
    @ViewChild('all') allCB;

    recommendString = '';
    areaString = '';
    taskString = '';
    defaultModel = 'GenericModel';
    defaultUUID = '';
    collectionName = '(Optional)';
    confidenceThresh = '0';
    recConfidenceThresh = '0';
    recCollectionName = '';
    generatedTestcase = '';
    genTestcaseCompiled = false;
    searchResults = [];
    searchResultsJson = null;
    storyDetails = '';
    searchResultsCount = 0;
    threshScaleOut = true;
    adminAccess = false;
    selectedResults = [];

    selectedResult1Body = '';
    selectedResult2Body = '';

    membersResultBody = '';

    modalActions = new EventEmitter<string|MaterializeAction>();
    compModalActions = new EventEmitter<string|MaterializeAction>();
    membersModalActions = new EventEmitter<string|MaterializeAction>();

    constructor(private cookieService: CookieService,
                private copyService: CopyService, private exportService: ExportService,
                private renderer: Renderer, private router: Router,
                private searchService: SearchService, private stylingService: StylingService) {

        const userCookie = this.cookieService.get('ere-app-credentials');
        if ( userCookie == null || userCookie === '' ) {
            // this.navigate('login');
        }
    }

    ngOnInit() {
        this.validateAdminAccess();
    }

    ngAfterViewInit() {
        if ( this.recConfidenceThresh !== '' ) {
            if ( !($('#threshFieldDiv').hasClass('active')) ) {
                $('#threshFieldDiv').addClass('active');
            }

            if ( $('#confidenceThresh').hasClass('ng-untouched') ) {
                $('#confidenceThresh').removeClass('ng-untouched');
                $('#confidenceThresh').addClass('ng-touched');
            }

            if ( !($('#confidenceThreshLabel').hasClass('active')) ) {
                $('#confidenceThreshLabel').addClass('active');
            }
        }
    }

    ngAfterViewChecked() {
        const PR = window['PR'];
        PR.prettyPrint();
    }

    containsText(target: string) {
        const whiteSpaces = /\S/g;
        return whiteSpaces.test(target);
    }

    validateAdminAccess() {
            this.adminAccess = false;
    }

    selectAll(event) {
        const element = this.allCB.nativeElement;
        const allSelected: boolean = element.checked;
        $('.resultcb').prop('checked', allSelected);
        if (allSelected) {
            this.selectedResults = [];
            for (let i = 0; i < this.searchResults.length; i++) {
                this.selectedResults.push('' + i);
            }
            this.setResultsMenuOptions(this.selectedResults.length);
        } else {
            this.selectedResults = [];
        }
    }

    setResultsMenuOptions(selectedCount: number) {
        if ( selectedCount === 1 ) {
            this.enableOption('exportOption', true);
            this.enableOption('copyOption', true);
            this.enableOption('compareOption', false);
        } else if ( selectedCount === 2 ) {
            this.enableOption('exportOption', true);
            this.enableOption('copyOption', false);
            this.enableOption('compareOption', true);
        } else {
            this.enableOption('exportOption', true);
            this.enableOption('copyOption', false);
            this.enableOption('compareOption', false);
        }
    }

    enableOption(targetId: string, targetEnabled: boolean) {
        if ( targetEnabled ) {
            if ($(`#${targetId}Li`).hasClass('disabled')) {
                $(`#${targetId}Li`).removeClass('disabled');
            }

            $(`#${targetId}Li`).css('cursor', 'pointer');
            $(`#${targetId}Li`).mouseenter(function() {
                $(`#${targetId}`).css('color', '#ffac2f');
                $(`#${targetId}I`).removeClass('md-et-dark');
                $(`#${targetId}I`).addClass('md-et-yellow');

                if ($(`#${targetId}I`).hasClass('md-inactive')) {
                    $(`#${targetId}I`).removeClass('md-inactive');
                }
            });

            $(`#${targetId}Li`).mouseleave(function() {
                $(`#${targetId}`).css('color', 'rgba(19, 19, 19, 1)');
                $(`#${targetId}I`).removeClass('md-et-yellow');
                $(`#${targetId}I`).addClass('md-et-dark');
                if ($(`#${targetId}I`).hasClass('md-inactive')) {
                    $(`#${targetId}I`).removeClass('md-inactive');
                }
            });

            $(`#${targetId}`).css('color', 'rgba(19, 19, 19, 1)');
            $(`#${targetId}`).hover(function() {
                $(`#${targetId}`).css('color', '#ffac2f');
            });

            $(`#${targetId}`).css('cursor', 'pointer');

            if ($(`#${targetId}I`).hasClass('md-inactive')) {
                $(`#${targetId}I`).removeClass('md-inactive');
            }

            $(`#${targetId}I`).css('cursor', 'pointer');
        } else {
            if (!$(`#${targetId}Li`).hasClass('disabled')) {
                $(`#${targetId}Li`).addClass('disabled');
            }
            $(`#${targetId}Li`).css('cursor', 'default');

            $(`#${targetId}`).css('color', 'rgba(19, 19, 19, 0.3)');
            $(`#${targetId}`).hover(function() {
                $(`#${targetId}`).css('color', 'rgba(19, 19, 19, 0.3)');
            });

            $(`#${targetId}`).css('cursor', 'default');

            if ($(`#${targetId}I`).hasClass('md-et-yellow')) {
                $(`#${targetId}I`).removeClass('md-et-yellow');
            }

            if (!$(`#${targetId}I`).hasClass('md-et-dark')) {
                $(`#${targetId}I`).addClass('md-et-dark');
            }

            if (!$(`#${targetId}I`).hasClass('md-inactive')) {
                $(`#${targetId}I`).addClass('md-inactive');
            }

            $(`#${targetId}I`).css('cursor', 'default');

            $(`#${targetId}Li`).mouseenter(function() {
                $(`#${targetId}`).css('color', 'rgba(19, 19, 19, 0.3)');
                if ($(`#${targetId}I`).hasClass('md-et-yellow')) {
                    $(`#${targetId}I`).removeClass('md-et-yellow');
                }

                if (!$(`#${targetId}I`).hasClass('md-et-dark')) {
                    $(`#${targetId}I`).addClass('md-et-dark');
                }

                if (!$(`#${targetId}I`).hasClass('md-inactive')) {
                    $(`#${targetId}I`).addClass('md-inactive');
                }
            });

            $(`#${targetId}Li`).mouseleave(function() {
                $(`#${targetId}`).css('color', 'rgba(19, 19, 19, 0.3)');
                if ($(`#${targetId}I`).hasClass('md-et-yellow')) {
                    $(`#${targetId}I`).removeClass('md-et-yellow');
                }

                if (!$(`#${targetId}I`).hasClass('md-et-dark')) {
                    $(`#${targetId}I`).addClass('md-et-dark');
                }

                if (!$(`#${targetId}I`).hasClass('md-inactive')) {
                    $(`#${targetId}I`).addClass('md-inactive');
                }
            });
        }
    }

    lineSelect(targetId: string) {
        const targetSelected: boolean = $(`#cb_${targetId}`).prop('checked');
        if (targetSelected) {
            this.selectedResults.push(targetId);
            this.setResultsMenuOptions(this.selectedResults.length);
        } else {
            const temp = [];
            for (let i = 0; i < this.selectedResults.length; i++) {
                if (this.selectedResults[i] !== targetId) {
                    temp.push(this.selectedResults[i]);
                }
            }
            this.selectedResults = temp;
            if (this.selectedResults.length) {
                this.setResultsMenuOptions(this.selectedResults.length);
            }
        }
    }

    exportAsCsv() {
        this.exportService.exportToCSV(this.selectedResults, this.searchResults);
    }

    copyToClipboard() {
        const textToCopy: string = $(`#bodyIdText${this.selectedResults[0]}`).text();
        this.copyService.copyToClipboard(textToCopy);
    }

    compare() {
        for ( let i = 0; i < this.searchResults.length; i++ ) {
            if ( this.selectedResults[0] === '' + i ) {
                this.selectedResult1Body = this.searchResults[i].body.toString();
                $('#selectedResult1Body').html('<pre class="prettyprint lang-java">' + this.selectedResult1Body + '</pre>');

                const packageName = this.searchResults[i].packageName;
                $('#packageName1').html('<b>Package:&nbsp;</b>' + packageName.substring(0, packageName.length - 1));
                $('#className1').html('<b>Class:&nbsp;</b>' + this.searchResults[i].className);
                $('#methodName1').html('<b>Method:&nbsp;</b>' + this.searchResults[i].methodName);
            }

            if ( this.selectedResults[1] === '' + i ) {
                this.selectedResult2Body = this.searchResults[i].body.toString();
                $('#selectedResult2Body').html('<pre class="prettyprint lang-java">' + this.selectedResult2Body + '</pre>');

                const packageName = this.searchResults[i].packageName;
                $('#packageName2').html('<b>Package:&nbsp;</b>' + packageName.substring(0, packageName.length - 1));
                $('#className2').html('<b>Class:&nbsp;</b>' + this.searchResults[i].className);
                $('#methodName2').html('<b>Method:&nbsp;</b>' + this.searchResults[i].methodName);
            }
        }

        this.compModalActions.emit({
            action: 'modal',
            params: ['open']
        });
    }

    showMembers(id: string) {
        const formatter = new CodeFormatPipe();
        const elementId = parseInt(id, 10);
        this.membersResultBody = this.searchResults[elementId].classMembers.toString();
        const packageName = this.searchResults[elementId].packageName;
        $('#membersPackageName').html('<b>Package:&nbsp;</b>' + packageName.substring(0, packageName.length - 1));
        $('#membersClassName').html('<b>Class:&nbsp;</b>' + this.searchResults[elementId].className);
        $('#membersResultBody').html('<pre class="prettyprint lang-java">' + formatter.transform(this.membersResultBody) + '</pre>');

        this.membersModalActions.emit({
            action: 'modal',
            params: ['open']
        });
    }

    membersClose(event) {
        this.membersModalActions.emit({
            action: 'modal',
            params: ['close']
        });
        this.membersResultBody = '';
    }

    menuInactive($event) {
        $event.stopPropagation();
        $event.preventDefault();
    }

    showFieldDescription(id: string) {
        this.stylingService.showFieldDescription(id);
    }

    showStoryBody(id: string) {
        const targetRow = document.getElementById(`bodyId${id}`);
        const currentDisplay = targetRow.style.display;
        if (currentDisplay === 'none') {
            targetRow.style.display = 'table-row';
        } else {
            targetRow.style.display = 'none';
        }

        this.storyDetails = this.searchResults.toString();

        let dispString = this.storyDetails.toString().replace(/;/g, ';\n');

        dispString = dispString.replace(/\./g, '\n    .');
    }

    focusStyling(event) {
        this.stylingService.focusStyling(event);
    }

    unFocusStyling(event) {
        this.stylingService.unFocusStyling(event);
    }

    clearErrors() {
        let element = this.areaField.nativeElement;
        this.renderer.setElementStyle(element, 'border-bottom', '1px solid rgba(0,0,0,.12)');
        this.renderer.setElementStyle(element, 'box-shadow', 'none');

        element = this.taskField.nativeElement;
        this.renderer.setElementStyle(element, 'border-bottom', '1px solid rgba(0,0,0,.12)');
        this.renderer.setElementStyle(element, 'box-shadow', 'none');

        document.getElementById('settingsIcon').innerHTML = ``;
        document.getElementById('settingsMsg').innerHTML = ``;
    }

    setInProgress(inProgress: boolean) {
        if (inProgress) {
            $('#recButton').addClass('disabled');
            $('#recommendProgress').css('display', 'block');
        } else {
            $('#recButton').removeClass('disabled');
            $('#recommendProgress').css('display', 'none');
        }
    }

    setReusableInProgress(inProgress: boolean) {
        if (inProgress) {
            $('#recButton').addClass('disabled');
            $('#progressDiv').css('display', 'block');
        } else {
            $('#recButton').removeClass('disabled');
            $('#progressDiv').css('display', 'none');
        }
    }

    setRecommendFailure(failure: boolean) {
        if (failure) {
            $('#recommendFailure').css( 'display', 'block');
        } else {
            $('#recommendFailure').css( 'display', 'none');
        }
    }

    setReusableFailure(failure: boolean) {
        if (failure) {
            $('#reusableFailure').css( 'display', 'block');
        } else {
            $('#reusableFailure').css( 'display', 'none');
        }
    }

    clearSearchResults(event) {
        this.generatedTestcase = '';
        this.recommendString = '';
        this.areaString = '';
        this.taskString = '';
        this.collectionName = '(Optional)';
        this.recCollectionName = '';
        this.confidenceThresh = '(Optional)';
        this.recConfidenceThresh = '';
        this.storyDetails = '';
        this.searchResults = [];
        this.searchResultsJson = null;
    }

    checkInput(): boolean {
        let continueSearch = true;

        this.clearErrors();
        if (this.defaultModel != null && this.defaultModel !== '') {
            if (this.areaString === '') {
                const element = this.areaField.nativeElement;

                this.renderer.setElementStyle(element, 'border-bottom', '1px solid red');
                this.renderer.setElementStyle(element, 'box-shadow', '0 1px 0 0 red');
                continueSearch = false;
            }

            if (this.taskString === '') {
                const element = this.taskField.nativeElement;

                this.renderer.setElementStyle(element, 'border-bottom', '1px solid red');
                this.renderer.setElementStyle(element, 'box-shadow', '0 1px 0 0 red');
                continueSearch = false;
            }
        } else {
            this.setErrorMessage('Model');
            continueSearch = false;
        }

        return continueSearch;
    }

    search(event) {
        if ( this.checkInput() ) {
            this.setRecommendFailure(false);
            this.modalActions.emit({action: 'modal', params: ['close']});
            this.searchResults = [];
            this.selectedResults = [];
            this.generatedTestcase = '';

            const body = {
                model: this.defaultModel,
                uuid: this.defaultUUID,
                area: this.areaString,
                task: this.taskString
            };

            this.setInProgress(true);

            this.searchService.search(body)
                .subscribe(data => {
                        this.searchResultsJson = data;
                    },
                    err => {
                            console.log('Error running search. Error: %s, URL: %s',
                                err.status, err.url);
                            this.setInProgress(false);
                            this.setRecommendFailure(true);
                    },
                    () => {
                        const error_message = this.searchResultsJson['error_message'];
                        this.setInProgress(false);
                        if ( error_message == null || error_message === '') {
                            this.generatedTestcase = this.searchResultsJson['result']['generated'];
                            this.genTestcaseCompiled = this.searchResultsJson['result']['genCompiled'];

                            // now retrieve the reusable test cases
                            const retrieveBody = {
                                model: this.defaultModel,
                                nn: this.searchResultsJson['result']['reusable']['nn'],
                                nn_sims: this.searchResultsJson['result']['reusable']['nn_sims']
                            };

                            this.searchService.retrieve(retrieveBody)
                                .subscribe(retrieveData => {
                                    this.searchResultsJson = retrieveData;
                                },
                                retrieveErr => {
                                    console.log('Error running retrieve. Error: %s, URL: %s',
                                    retrieveErr.status, retrieveErr.url);
                                    this.setReusableInProgress(false);
                                    this.setReusableFailure(true);
                                },
                                () => {
                                    const retrieveError = this.searchResultsJson['error_message'];
                                    if (retrieveError == null || retrieveError === '') {
                                        this.searchResults = this.searchResultsJson;
                                        if (this.searchResults == null || this.searchResults.length === 0 ) {
                                            this.setReusableFailure(true);
                                        }
                                        this.setReusableInProgress(false);
                                    } else {
                                        this.setReusableInProgress(false);
                                        this.setReusableFailure(true);
                                    }
                                });
                        } else {
                            this.setRecommendFailure(true);
                        }
                    }
            );
        }
    }

    openModal(event) {
        this.setInProgress(false);
        this.setRecommendFailure(false);
        this.modalActions.emit({action: 'modal', params: ['open']});
    }

    compareClose(event) {
        this.compModalActions.emit({action: 'modal', params: ['close']});
        this.selectedResult1Body = '';
        this.selectedResult2Body = '';
    }

    navigate(target: string) {
        this.modalActions.emit({action: 'modal', params: ['close']});
        this.router.navigate([`/${target}`]);
    }

    setErrorMessage(missingSetting: string) {
        document.getElementById('settingsIcon').innerHTML = `<i class="material-icons" style="margin-top: 5%;">error</i>`;
        document.getElementById('settingsMsg').innerHTML = `
		A default ${missingSetting} setting is missing. Please set it in <a id="settingsLink" class="nav-link">Default Settings</a>.`;
        $('#settingsIcon').find('.material-icons').css('color', 'rgba(255, 172, 47, 1)');
        this.renderer.listen(document.getElementById('settingsLink'), 'click', (event) => {
            this.navigate('settings');
        });
    }
}
