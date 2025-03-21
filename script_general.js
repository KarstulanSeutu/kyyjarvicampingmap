(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"scrollBarColor":"#000000","hash": "b89c46b33856edfb4b19da5c2b0b4036bbf1edee3705063460e3696ebd465a57", "definitions": [{"id":"playList_EE543726_B795_1F22_41D5_2530E05E2941","items":[{"player":"this.MapViewerMapPlayer","class":"MapPlayListItem","media":"this.map_805D6765_B795_3F26_41D9_49B2ED719B4A","begin":"this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"}],"class":"PlayList"},{"id":"effect_E29256AC_B7AD_1126_41D0_EA4A64B7C46B","class":"FadeInEffect","duration":500},{"data":{"label":"WhatsApp Image 2025-03-21 at 09.21.27 (1)"},"height":1626,"thumbnailUrl":"media/album_8124C55C_B79A_F366_41A9_845C92D51D26_1_t.webp","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/album_8124C55C_B79A_F366_41A9_845C92D51D26_1.webp"}]},"class":"Photo","label":trans('album_8124C55C_B79A_F366_41A9_845C92D51D26_1.label'),"id":"album_8124C55C_B79A_F366_41A9_845C92D51D26_1","width":1220,"duration":5000},{"id":"effect_F4BE8044_B7AB_F166_41E1_D896321EAAA3","class":"FadeInEffect","duration":500},{"scaleMode":"fit_inside","bottom":"5.88%","verticalAlign":"middle","id":"Image_F1D7072F_B7B5_7F22_41D5_E94EE5D8E5F4","left":"0.06%","propagateClick":false,"horizontalAlign":"center","data":{"name":"Image9784"},"width":"5.721%","minHeight":1,"backgroundOpacity":0,"minWidth":1,"height":"11.603%","class":"Image","url":trans('Image_F1D7072F_B7B5_7F22_41D5_E94EE5D8E5F4.url')},{"id":"FadeInEffect_F0906EBD_B7BB_3126_41A8_951E67CCCDC8","easing":"cubic_in_out","class":"FadeInEffect"},{"data":{"label":"Paikka auringossa"},"height":588,"thumbnailUrl":"media/album_8B9FDE5A_B7AD_1162_41C8_DC0896597ED2_0_t.webp","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/album_8B9FDE5A_B7AD_1162_41C8_DC0896597ED2_0.webp"}]},"class":"Photo","label":trans('album_8B9FDE5A_B7AD_1162_41C8_DC0896597ED2_0.label'),"id":"album_8B9FDE5A_B7AD_1162_41C8_DC0896597ED2_0","width":769,"duration":5000},{"data":{"label":"WhatsApp Image 2025-03-21 at 09.21.27"},"height":1110,"thumbnailUrl":"media/album_8124C55C_B79A_F366_41A9_845C92D51D26_0_t.webp","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/album_8124C55C_B79A_F366_41A9_845C92D51D26_0.webp"}]},"class":"Photo","label":trans('album_8124C55C_B79A_F366_41A9_845C92D51D26_0.label'),"id":"album_8124C55C_B79A_F366_41A9_845C92D51D26_0","width":1220,"duration":5000},{"id":"album_8124C55C_B79A_F366_41A9_845C92D51D26","thumbnailUrl":"media/album_8124C55C_B79A_F366_41A9_845C92D51D26_t.png","data":{"label":"Sauna"},"class":"PhotoAlbum","label":trans('album_8124C55C_B79A_F366_41A9_845C92D51D26.label'),"playList":"this.album_8124C55C_B79A_F366_41A9_845C92D51D26_AlbumPlayList","loop":true},{"data":{"label":"WhatsApp Image 2025-03-21 at 09.21.44"},"height":2048,"thumbnailUrl":"media/album_828E60F4_B79D_3126_41DD_A40CC8170059_0_t.webp","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/album_828E60F4_B79D_3126_41DD_A40CC8170059_0.webp"}]},"class":"Photo","label":trans('album_828E60F4_B79D_3126_41DD_A40CC8170059_0.label'),"id":"album_828E60F4_B79D_3126_41DD_A40CC8170059_0","width":1536,"duration":5000},{"data":{"label":"WhatsApp Image 2025-03-21 at 09.21.56"},"height":1536,"thumbnailUrl":"media/album_828E60F4_B79D_3126_41DD_A40CC8170059_1_t.webp","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/album_828E60F4_B79D_3126_41DD_A40CC8170059_1.webp"}]},"class":"Photo","label":trans('album_828E60F4_B79D_3126_41DD_A40CC8170059_1.label'),"id":"album_828E60F4_B79D_3126_41DD_A40CC8170059_1","width":2048,"duration":5000},{"toolTipPaddingRight":6,"toolTipBorderColor":"#767676","playbackBarBorderRadius":0,"toolTipFontColor":"#606060","progressLeft":"33%","playbackBarProgressBorderColor":"#000000","firstTransitionDuration":0,"subtitlesTextShadowColor":"#000000","progressBackgroundColorRatios":[0],"left":"0%","playbackBarHeadBorderRadius":0,"playbackBarHeadShadowBlurRadius":3,"subtitlesFontSize":"3vmin","playbackBarLeft":0,"toolTipPaddingLeft":6,"playbackBarHeadBorderColor":"#000000","subtitlesBottom":10,"propagateClick":false,"data":{"name":"Floorplan Viewer"},"subtitlesTextShadowHorizontalLength":1,"progressRight":"33%","progressOpacity":0.7,"toolTipPaddingBottom":4,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarBorderSize":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"toolTipPaddingTop":4,"playbackBarHeadBorderSize":0,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"toolTipFontSize":"1.11vmin","subtitlesFontFamily":"Arial","playbackBarHeadShadow":true,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTextShadowVerticalLength":1,"toolTipShadowColor":"#333138","playbackBarBottom":5,"progressBorderColor":"#000000","top":"2.44%","subtitlesBackgroundColor":"#000000","surfaceReticleColor":"#FFFFFF","subtitlesGap":0,"id":"MapViewer","surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipTextShadowColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarHeadWidth":6,"progressBackgroundColor":["#000000"],"playbackBarProgressBorderSize":0,"playbackBarRight":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"vrPointerColor":"#FFFFFF","toolTipFontFamily":"Arial","progressBottom":10,"vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColor":["#3399FF"],"progressHeight":2,"playbackBarHeadShadowOpacity":0.7,"progressBorderSize":0,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowOpacity":1,"progressBarBorderRadius":2,"progressBarBorderSize":0,"minHeight":1,"minWidth":1,"playbackBarProgressBackgroundColorRatios":[0],"height":"92.824%","vrPointerSelectionTime":2000,"class":"ViewerArea","subtitlesTop":0,"width":"100%","subtitlesFontColor":"#FFFFFF","vrThumbstickRotationStep":20,"toolTipBackgroundColor":"#F6F6F6","playbackBarBorderColor":"#FFFFFF","progressBorderRadius":2},{"id":"MapViewerMapPlayer","movementMode":"constrained","class":"MapPlayer","viewerArea":"this.MapViewer"},{"id":"FadeOutEffect_F090AEBD_B7BB_3126_41E0_1DA79DFF54A9","easing":"cubic_in_out","class":"FadeOutEffect"},{"id":"album_828E60F4_B79D_3126_41DD_A40CC8170059","thumbnailUrl":"media/album_828E60F4_B79D_3126_41DD_A40CC8170059_t.png","data":{"label":"Respan terassi"},"class":"PhotoAlbum","label":trans('album_828E60F4_B79D_3126_41DD_A40CC8170059.label'),"playList":"this.album_828E60F4_B79D_3126_41DD_A40CC8170059_AlbumPlayList","loop":true},{"id":"effect_F4BBC045_B7AB_F166_4195_03072B7D2FB7","class":"FadeOutEffect","duration":500},{"id":"mainPlayList","items":[{"player":"this.MainViewerPhotoAlbumPlayer","class":"PhotoAlbumPlayListItem","media":"this.album_8B9FDE5A_B7AD_1162_41C8_DC0896597ED2","begin":"this.playList_EE543726_B795_1F22_41D5_2530E05E2941.set('selectedIndex', 0); "},{"player":"this.MainViewerPhotoAlbumPlayer","class":"PhotoAlbumPlayListItem","media":"this.album_828E60F4_B79D_3126_41DD_A40CC8170059","start":"this._initItemWithComps(this.mainPlayList, 1, [this.MapViewer], 'begin', false, this.FadeOutEffect_F090AEBD_B7BB_3126_41E0_1DA79DFF54A9, 0, 0); this._initItemWithComps(this.mainPlayList, 1, [this.MapViewer], 'end', true, this.FadeInEffect_F0906EBD_B7BB_3126_41A8_951E67CCCDC8, 0, 0); this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000')"},{"player":"this.MainViewerPhotoAlbumPlayer","end":"this.trigger('tourEnded')","start":"this._initItemWithComps(this.mainPlayList, 2, [this.MapViewer], 'begin', false, this.FadeOutEffect_F0906EBE_B7BB_3122_41DA_745E63BD8243, 0, 0); this._initItemWithComps(this.mainPlayList, 2, [this.MapViewer], 'end', true, this.FadeInEffect_F0902EBE_B7BB_3122_41C1_A7170EEBAAD5, 0, 0); this.changeBackgroundWhilePlay(this.mainPlayList, 2, '#000000')","class":"PhotoAlbumPlayListItem","media":"this.album_8124C55C_B79A_F366_41A9_845C92D51D26"}],"class":"PlayList"},{"maximumZoomFactor":1.2,"fieldOfViewOverlayInsideOpacity":0.4,"fieldOfViewOverlayRadiusScale":0.3,"fieldOfViewOverlayOutsideColor":"#000000","height":923,"class":"Map","initialZoomFactor":1,"scaleMode":"fit_inside","fieldOfViewOverlayInsideColor":"#99D6FF","label":trans('map_805D6765_B795_3F26_41D9_49B2ED719B4A.label'),"id":"map_805D6765_B795_3F26_41D9_49B2ED719B4A","image":{"class":"ImageResource","levels":["this.imlevel_EE22B679_B795_112E_41DD_D81FAB258D6A","this.imlevel_EE22F67A_B795_1122_417A_34A2B1AEC02E","this.imlevel_EE22767A_B795_1122_4184_405CA970DA54","this.imlevel_EE1DB67A_B795_1122_41D5_522CA0C3256B"]},"data":{"label":"Karttapohja"},"overlays":["this.overlay_89C27B85_B7AD_17E6_41DC_4513F5598690","this.overlay_F3B3492A_B7AE_F322_41D0_C207088C54E1","this.overlay_E17B4742_B79D_7F62_41E0_B2C943104044","this.overlay_EDBBA606_B79B_30E2_41E1_5F229A36037F"],"width":1220,"thumbnailUrl":"media/map_805D6765_B795_3F26_41D9_49B2ED719B4A_t.webp","minimumZoomFactor":0.5},{"data":{"label":"WhatsApp Image 2025-03-21 at 09.21.27 (3)"},"height":1787,"thumbnailUrl":"media/album_8124C55C_B79A_F366_41A9_845C92D51D26_3_t.webp","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/album_8124C55C_B79A_F366_41A9_845C92D51D26_3.webp"}]},"class":"Photo","label":trans('album_8124C55C_B79A_F366_41A9_845C92D51D26_3.label'),"id":"album_8124C55C_B79A_F366_41A9_845C92D51D26_3","width":1220,"duration":5000},{"id":"FadeOutEffect_F0906EBE_B7BB_3122_41DA_745E63BD8243","easing":"cubic_in_out","class":"FadeOutEffect"},{"id":"MainViewerPhotoAlbumPlayer","class":"PhotoAlbumPlayer","viewerArea":"this.MainViewer"},{"scaleMode":"fit_inside","bottom":"0%","verticalAlign":"middle","id":"Image_F19B0956_B7AB_7362_41E0_CA51789CE8FB","left":"0.09%","propagateClick":false,"horizontalAlign":"center","data":{"name":"Image9735"},"width":"11.577%","minHeight":1,"backgroundOpacity":0,"minWidth":1,"height":"10.84%","class":"Image","url":trans('Image_F19B0956_B7AB_7362_41E0_CA51789CE8FB.url')},{"id":"FadeInEffect_F0902EBE_B7BB_3122_41C1_A7170EEBAAD5","easing":"cubic_in_out","class":"FadeInEffect"},{"id":"album_8B9FDE5A_B7AD_1162_41C8_DC0896597ED2","thumbnailUrl":"media/album_8B9FDE5A_B7AD_1162_41C8_DC0896597ED2_t.png","data":{"label":"Photo Album Paikka auringossa"},"class":"PhotoAlbum","label":trans('album_8B9FDE5A_B7AD_1162_41C8_DC0896597ED2.label'),"playList":"this.album_8B9FDE5A_B7AD_1162_41C8_DC0896597ED2_AlbumPlayList","loop":true},{"scaleMode":"fit_inside","click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_F4BE8044_B7AB_F166_41E1_D896321EAAA3, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_F4BBC045_B7AB_F166_4195_03072B7D2FB7, 'hideEffect', false)}.bind(this); if(!this.MapViewer.get('visible')){ visibleFunc(this.MapViewer) } else { invisibleFunc(this.MapViewer) }","top":"0%","verticalAlign":"middle","id":"Image_F453B9D3_B7AD_1362_41D0_0CA2DE7422BE","data":{"name":"Image9129"},"right":"0%","propagateClick":false,"horizontalAlign":"center","width":"13.468%","minHeight":1,"backgroundOpacity":0,"minWidth":1,"height":"13.053%","class":"Image","url":trans('Image_F453B9D3_B7AD_1362_41D0_0CA2DE7422BE.url')},{"toolTipPaddingRight":6,"toolTipBorderColor":"#767676","playbackBarBorderRadius":0,"toolTipFontColor":"#606060","progressLeft":"33%","playbackBarProgressBorderColor":"#000000","firstTransitionDuration":0,"subtitlesTextShadowColor":"#000000","progressBackgroundColorRatios":[0],"playbackBarHeadBorderRadius":0,"playbackBarHeadShadowBlurRadius":3,"subtitlesFontSize":"3vmin","data":{"name":"Main Viewer"},"playbackBarLeft":0,"toolTipPaddingLeft":6,"playbackBarHeadBorderColor":"#000000","subtitlesBottom":50,"propagateClick":false,"subtitlesTextShadowHorizontalLength":1,"progressRight":"33%","progressOpacity":0.7,"toolTipPaddingBottom":4,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarBorderSize":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadHeight":15,"toolTipPaddingTop":4,"playbackBarHeadBorderSize":0,"progressBarBorderColor":"#000000","progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"subtitlesFontFamily":"Arial","toolTipFontSize":"1.11vmin","playbackBarHeadShadow":true,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTextShadowVerticalLength":1,"toolTipShadowColor":"#333138","playbackBarBottom":5,"progressBorderColor":"#000000","subtitlesBackgroundColor":"#000000","surfaceReticleColor":"#FFFFFF","subtitlesGap":0,"id":"MainViewer","surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipTextShadowColor":"#000000","progressBarBackgroundColor":["#3399FF"],"playbackBarHeadWidth":6,"progressBackgroundColor":["#000000"],"playbackBarProgressBorderSize":0,"playbackBarRight":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"vrPointerColor":"#FFFFFF","toolTipFontFamily":"Arial","progressBottom":10,"vrPointerSelectionColor":"#FF6600","playbackBarProgressBackgroundColor":["#3399FF"],"progressHeight":2,"playbackBarHeadShadowOpacity":0.7,"progressBorderSize":0,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowOpacity":1,"progressBarBorderRadius":2,"progressBarBorderSize":0,"minHeight":50,"minWidth":100,"playbackBarProgressBackgroundColorRatios":[0],"height":"100%","vrPointerSelectionTime":2000,"class":"ViewerArea","subtitlesTop":0,"width":"100%","subtitlesFontColor":"#FFFFFF","vrThumbstickRotationStep":20,"toolTipBackgroundColor":"#F6F6F6","playbackBarBorderColor":"#FFFFFF","progressBorderRadius":2},{"id":"effect_E292D6AC_B7AD_1126_41DC_DFAE86E84B29","class":"FadeOutEffect","duration":500},{"data":{"label":"WhatsApp Image 2025-03-21 at 09.21.27 (2)"},"height":1695,"thumbnailUrl":"media/album_8124C55C_B79A_F366_41A9_845C92D51D26_2_t.webp","image":{"class":"ImageResource","levels":[{"class":"ImageResourceLevel","url":"media/album_8124C55C_B79A_F366_41A9_845C92D51D26_2.webp"}]},"class":"Photo","label":trans('album_8124C55C_B79A_F366_41A9_845C92D51D26_2.label'),"id":"album_8124C55C_B79A_F366_41A9_845C92D51D26_2","width":1220,"duration":5000},{"click":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 0, this.effect_E29256AC_B7AD_1126_41D0_EA4A64B7C46B, 'showEffect', false)}.bind(this); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_E292D6AC_B7AD_1126_41DC_DFAE86E84B29, 'hideEffect', false)}.bind(this); if(!this.MapViewer.get('visible')){ visibleFunc(this.MapViewer) } else { invisibleFunc(this.MapViewer) }","top":"14.81%","id":"Label_E5570EB7_B7B5_7122_41D8_887A199DACD6","fontFamily":"SignPainter-HouseScript Semibold","data":{"name":"Label14329"},"right":"2.48%","text":trans('Label_E5570EB7_B7B5_7122_41D8_887A199DACD6.text'),"propagateClick":false,"horizontalAlign":"center","fontSize":"1.48vmin","fontColor":"#FFFFFF","width":"9.009%","minHeight":16,"backgroundOpacity":0,"minWidth":30,"height":"4.58%","class":"Label"},{"id":"album_8124C55C_B79A_F366_41A9_845C92D51D26_AlbumPlayList","items":[{"class":"PhotoPlayListItem","camera":{"targetPosition":{"y":0.32,"zoomFactor":1.04,"x":0.64,"class":"PhotoCameraPosition"},"scaleMode":"fit_inside","initialPosition":{"class":"PhotoCameraPosition"},"class":"MovementPhotoCamera","duration":5000},"media":"this.album_8124C55C_B79A_F366_41A9_845C92D51D26_2"},{"class":"PhotoPlayListItem","camera":{"targetPosition":{"y":0.64,"zoomFactor":1.04,"x":0.57,"class":"PhotoCameraPosition"},"scaleMode":"fit_inside","initialPosition":{"class":"PhotoCameraPosition"},"class":"MovementPhotoCamera","duration":5000},"media":"this.album_8124C55C_B79A_F366_41A9_845C92D51D26_1"},{"class":"PhotoPlayListItem","camera":{"targetPosition":{"y":0.59,"zoomFactor":1.04,"x":0.71,"class":"PhotoCameraPosition"},"scaleMode":"fit_inside","initialPosition":{"class":"PhotoCameraPosition"},"class":"MovementPhotoCamera","duration":5000},"media":"this.album_8124C55C_B79A_F366_41A9_845C92D51D26_0"},{"class":"PhotoPlayListItem","camera":{"targetPosition":{"y":0.72,"zoomFactor":1.04,"x":0.34,"class":"PhotoCameraPosition"},"scaleMode":"fit_inside","initialPosition":{"class":"PhotoCameraPosition"},"class":"MovementPhotoCamera","duration":5000},"media":"this.album_8124C55C_B79A_F366_41A9_845C92D51D26_3"}],"class":"PhotoPlayList"},{"id":"album_828E60F4_B79D_3126_41DD_A40CC8170059_AlbumPlayList","items":[{"class":"PhotoPlayListItem","camera":{"targetPosition":{"y":0.52,"zoomFactor":1.04,"x":0.32,"class":"PhotoCameraPosition"},"scaleMode":"fit_inside","initialPosition":{"class":"PhotoCameraPosition"},"class":"MovementPhotoCamera","duration":5000},"media":"this.album_828E60F4_B79D_3126_41DD_A40CC8170059_1"},{"class":"PhotoPlayListItem","camera":{"targetPosition":{"y":0.42,"zoomFactor":1.04,"x":0.61,"class":"PhotoCameraPosition"},"scaleMode":"fit_inside","initialPosition":{"class":"PhotoCameraPosition"},"class":"MovementPhotoCamera","duration":5000},"media":"this.album_828E60F4_B79D_3126_41DD_A40CC8170059_0"}],"class":"PhotoPlayList"},{"height":1549,"width":2048,"id":"imlevel_EE22B679_B795_112E_41DD_D81FAB258D6A","class":"ImageResourceLevel","url":trans('imlevel_EE22B679_B795_112E_41DD_D81FAB258D6A.url')},{"height":774,"width":1024,"id":"imlevel_EE22F67A_B795_1122_417A_34A2B1AEC02E","class":"ImageResourceLevel","url":trans('imlevel_EE22F67A_B795_1122_417A_34A2B1AEC02E.url')},{"height":387,"width":512,"id":"imlevel_EE22767A_B795_1122_4184_405CA970DA54","class":"ImageResourceLevel","url":trans('imlevel_EE22767A_B795_1122_4184_405CA970DA54.url')},{"height":193,"width":256,"id":"imlevel_EE1DB67A_B795_1122_41D5_522CA0C3256B","tags":"preload","class":"ImageResourceLevel","url":trans('imlevel_EE1DB67A_B795_1122_41D5_522CA0C3256B.url')},{"areas":["this.HotspotMapOverlayArea_8B5FBC27_B7AD_1122_41CA_FCE40E409C4E"],"useHandCursor":true,"id":"overlay_89C27B85_B7AD_17E6_41DC_4513F5598690","image":{"data":{"label":"Saunamokki"},"height":71,"image":"this.res_F52E79DA_B7B5_1362_41B4_59A3C199E06E","offsetX":39.5,"x":673.15,"scaleMode":"fit_inside","offsetY":35.5,"y":162.6,"class":"HotspotMapOverlayImage","width":79},"data":{"label":"Saunamokki"},"class":"AreaHotspotMapOverlay"},{"areas":["this.HotspotMapOverlayArea_8A5F49A7_B7AE_F322_41CE_2F2EA748DE81"],"useHandCursor":true,"id":"overlay_F3B3492A_B7AE_F322_41D0_C207088C54E1","image":{"data":{"label":"Respa"},"height":186,"image":"this.res_F52B79DD_B7B5_1366_41E6_0BA1B06371A1","offsetX":131,"x":592.57,"scaleMode":"fit_inside","offsetY":93,"y":764.01,"class":"HotspotMapOverlayImage","width":262},"data":{"label":"Respa"},"class":"AreaHotspotMapOverlay"},{"areas":["this.HotspotMapOverlayArea_E1EA87CB_B79D_7F62_41BC_EF0087C6370F"],"useHandCursor":true,"id":"overlay_E17B4742_B79D_7F62_41E0_B2C943104044","image":{"data":{"label":"Image"},"height":43.77,"image":"this.res_EE2BC69E_B79B_F1E2_41BC_23B63846D76C","offsetX":31.04,"x":705.05,"scaleMode":"fit_inside","offsetY":21.88,"y":196.3,"class":"HotspotMapOverlayImage","width":62.08},"data":{"label":"Image"},"class":"AreaHotspotMapOverlay"},{"areas":["this.HotspotMapOverlayArea_EDB6E60B_B79B_30E2_41D0_0B21DA2DF9B2"],"useHandCursor":true,"id":"overlay_EDBBA606_B79B_30E2_41E1_5F229A36037F","image":{"data":{"label":"Image"},"height":42.3,"image":"this.res_EE2BC69E_B79B_F1E2_41BC_23B63846D76C","offsetX":25.18,"x":506.53,"scaleMode":"fit_inside","offsetY":21.15,"y":803.58,"class":"HotspotMapOverlayImage","width":50.36},"data":{"label":"Image"},"class":"AreaHotspotMapOverlay"},{"id":"album_8B9FDE5A_B7AD_1162_41C8_DC0896597ED2_AlbumPlayList","items":[{"class":"PhotoPlayListItem","camera":{"targetPosition":{"y":0.66,"zoomFactor":1.04,"x":0.57,"class":"PhotoCameraPosition"},"scaleMode":"fit_inside","initialPosition":{"class":"PhotoCameraPosition"},"class":"MovementPhotoCamera","duration":5000},"media":"this.album_8B9FDE5A_B7AD_1162_41C8_DC0896597ED2_0"}],"class":"PhotoPlayList"},{"id":"HotspotMapOverlayArea_8B5FBC27_B7AD_1122_41CA_FCE40E409C4E","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","mapColor":"any","class":"HotspotMapOverlayArea"},{"id":"res_F52E79DA_B7B5_1362_41B4_59A3C199E06E","class":"ImageResource","levels":[{"height":71,"width":79,"class":"ImageResourceLevel","url":"media/res_F52E79DA_B7B5_1362_41B4_59A3C199E06E_0.webp"}]},{"id":"HotspotMapOverlayArea_8A5F49A7_B7AE_F322_41CE_2F2EA748DE81","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any","class":"HotspotMapOverlayArea"},{"id":"res_F52B79DD_B7B5_1366_41E6_0BA1B06371A1","class":"ImageResource","levels":[{"height":186,"width":262,"class":"ImageResourceLevel","url":"media/res_F52B79DD_B7B5_1366_41E6_0BA1B06371A1_0.webp"}]},{"id":"HotspotMapOverlayArea_E1EA87CB_B79D_7F62_41BC_EF0087C6370F","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","mapColor":"any","class":"HotspotMapOverlayArea"},{"id":"res_EE2BC69E_B79B_F1E2_41BC_23B63846D76C","class":"ImageResource","levels":[{"height":44,"width":44,"class":"ImageResourceLevel","url":"media/res_EE2BC69E_B79B_F1E2_41BC_23B63846D76C_0.webp"}]},{"id":"HotspotMapOverlayArea_EDB6E60B_B79B_30E2_41D0_0B21DA2DF9B2","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any","class":"HotspotMapOverlayArea"}],"scrollBarMargin":2,"gap":10,"watermark":false,"id":"rootPlayer","defaultMenu":["fullscreen","mute","rotation"],"start":"this.init(); this.playList_EE543726_B795_1F22_41D5_2530E05E2941.set('selectedIndex', 0)","data":{"locales":{"en":"locale/en.txt"},"defaultLocale":"en","history":{},"name":"Player690","displayTooltipInTouchScreens":true,"textToSpeechConfig":{"pitch":1,"speechOnTooltip":false,"volume":1,"rate":1,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"stopBackgroundAudio":false}},"backgroundColor":["#000000"],"propagateClick":false,"layout":"absolute","children":["this.MainViewer","this.MapViewer","this.Image_F453B9D3_B7AD_1362_41D0_0CA2DE7422BE","this.Image_F19B0956_B7AB_7362_41E0_CA51789CE8FB","this.Image_F1D7072F_B7B5_7F22_41D5_E94EE5D8E5F4","this.Label_E5570EB7_B7B5_7122_41D8_887A199DACD6"],"scripts":{"historyGoForward":TDV.Tour.Script.historyGoForward,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setMapLocation":TDV.Tour.Script.setMapLocation,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"openLink":TDV.Tour.Script.openLink,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"executeJS":TDV.Tour.Script.executeJS,"showWindow":TDV.Tour.Script.showWindow,"setLocale":TDV.Tour.Script.setLocale,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"downloadFile":TDV.Tour.Script.downloadFile,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"historyGoBack":TDV.Tour.Script.historyGoBack,"getPixels":TDV.Tour.Script.getPixels,"startMeasurement":TDV.Tour.Script.startMeasurement,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setValue":TDV.Tour.Script.setValue,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"playAudioList":TDV.Tour.Script.playAudioList,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"cloneBindings":TDV.Tour.Script.cloneBindings,"showPopupImage":TDV.Tour.Script.showPopupImage,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"init":TDV.Tour.Script.init,"getKey":TDV.Tour.Script.getKey,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"mixObject":TDV.Tour.Script.mixObject,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"initQuiz":TDV.Tour.Script.initQuiz,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"quizShowScore":TDV.Tour.Script.quizShowScore,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizStart":TDV.Tour.Script.quizStart,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"initAnalytics":TDV.Tour.Script.initAnalytics,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getComponentByName":TDV.Tour.Script.getComponentByName,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"quizFinish":TDV.Tour.Script.quizFinish,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"clone":TDV.Tour.Script.clone,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaByName":TDV.Tour.Script.getMediaByName,"textToSpeech":TDV.Tour.Script.textToSpeech,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"registerKey":TDV.Tour.Script.registerKey,"isPanorama":TDV.Tour.Script.isPanorama,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"createTween":TDV.Tour.Script.createTween,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"disableVR":TDV.Tour.Script.disableVR,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"toggleVR":TDV.Tour.Script.toggleVR,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"existsKey":TDV.Tour.Script.existsKey,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"translate":TDV.Tour.Script.translate,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getMainViewer":TDV.Tour.Script.getMainViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"shareSocial":TDV.Tour.Script.shareSocial,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"unregisterKey":TDV.Tour.Script.unregisterKey,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"resumePlayers":TDV.Tour.Script.resumePlayers,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"enableVR":TDV.Tour.Script.enableVR,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getOverlays":TDV.Tour.Script.getOverlays},"width":"100%","minHeight":0,"minWidth":0,"height":"100%","class":"Player","backgroundColorRatios":[0]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.7, Fri Mar 21 2025