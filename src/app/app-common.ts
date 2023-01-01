import { InjectionToken } from '@angular/core';

export const Links =
    [
        [
            {
                name: 'メインページ',
                icon: 'home',
                link: './main'
            },
            {
                name: '一覧画面',
                icon: 'ballot',
                link: './list'
            },
            {
                name: '設定画面',
                icon: 'settings',
                link: './setting'
            }
        ],
        [
            {
                name: '影響調査トップ',
                icon: 'home',
                link: './main2'
            },
            {
                name: 'その他画面',
                icon: 'ballot',
                link: './other'
            },
            {
                name: '設定画面2',
                icon: 'settings',
                link: './setting2'
            }
        ]
    ];

export let LINKS_INFO = new InjectionToken('links.info');
