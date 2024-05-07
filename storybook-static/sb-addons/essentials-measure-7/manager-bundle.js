try {
    (() => {
        var t = __REACT__,
            {
                Children: B,
                Component: f,
                Fragment: R,
                Profiler: P,
                PureComponent: L,
                StrictMode: E,
                Suspense: D,
                __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: w,
                cloneElement: M,
                createContext: v,
                createElement: x,
                createFactory: H,
                createRef: U,
                forwardRef: F,
                isValidElement: N,
                lazy: G,
                memo: W,
                startTransition: K,
                unstable_act: Y,
                useCallback: u,
                useContext: V,
                useDebugValue: q,
                useDeferredValue: Z,
                useEffect: d,
                useId: z,
                useImperativeHandle: J,
                useInsertionEffect: Q,
                useLayoutEffect: $,
                useMemo: j,
                useReducer: X,
                useRef: oo,
                useState: no,
                useSyncExternalStore: eo,
                useTransition: co,
                version: to,
            } = __REACT__;
        var io = __STORYBOOK_API__,
            {
                ActiveTabs: so,
                Consumer: uo,
                ManagerContext: mo,
                Provider: po,
                addons: l,
                combineParameters: So,
                controlOrMetaKey: Co,
                controlOrMetaSymbol: ho,
                eventMatchesShortcut: bo,
                eventToShortcut: To,
                isMacLike: _o,
                isShortcutTaken: Ao,
                keyToSymbol: go,
                merge: yo,
                mockChannel: Oo,
                optionOrAltSymbol: ko,
                shortcutMatchesShortcut: Bo,
                shortcutToHumanString: fo,
                types: m,
                useAddonState: Ro,
                useArgTypes: Po,
                useArgs: Lo,
                useChannel: Eo,
                useGlobalTypes: Do,
                useGlobals: p,
                useParameter: wo,
                useSharedState: Mo,
                useStoryPrepared: vo,
                useStorybookApi: S,
                useStorybookState: xo,
            } = __STORYBOOK_API__;
        var Go = __STORYBOOK_COMPONENTS__,
            {
                A: Wo,
                ActionBar: Ko,
                AddonPanel: Yo,
                Badge: Vo,
                Bar: qo,
                Blockquote: Zo,
                Button: zo,
                ClipboardCode: Jo,
                Code: Qo,
                DL: $o,
                Div: jo,
                DocumentWrapper: Xo,
                EmptyTabContent: on,
                ErrorFormatter: nn,
                FlexBar: en,
                Form: cn,
                H1: tn,
                H2: rn,
                H3: In,
                H4: an,
                H5: ln,
                H6: sn,
                HR: un,
                IconButton: C,
                IconButtonSkeleton: dn,
                Icons: mn,
                Img: pn,
                LI: Sn,
                Link: Cn,
                ListItem: hn,
                Loader: bn,
                OL: Tn,
                P: _n,
                Placeholder: An,
                Pre: gn,
                ResetWrapper: yn,
                ScrollArea: On,
                Separator: kn,
                Spaced: Bn,
                Span: fn,
                StorybookIcon: Rn,
                StorybookLogo: Pn,
                Symbols: Ln,
                SyntaxHighlighter: En,
                TT: Dn,
                TabBar: wn,
                TabButton: Mn,
                TabWrapper: vn,
                Table: xn,
                Tabs: Hn,
                TabsState: Un,
                TooltipLinkList: Fn,
                TooltipMessage: Nn,
                TooltipNote: Gn,
                UL: Wn,
                WithTooltip: Kn,
                WithTooltipPure: Yn,
                Zoom: Vn,
                codeCommon: qn,
                components: Zn,
                createCopyToClipboardFunction: zn,
                getStoryHref: Jn,
                icons: Qn,
                interleaveSeparators: $n,
                nameSpaceClassNames: jn,
                resetComponents: Xn,
                withReset: oe,
            } = __STORYBOOK_COMPONENTS__;
        var re = __STORYBOOK_ICONS__,
            {
                AccessibilityAltIcon: Ie,
                AccessibilityIcon: ae,
                AddIcon: le,
                AdminIcon: ie,
                AlertAltIcon: se,
                AlertIcon: ue,
                AlignLeftIcon: de,
                AlignRightIcon: me,
                AppleIcon: pe,
                ArrowDownIcon: Se,
                ArrowLeftIcon: Ce,
                ArrowRightIcon: he,
                ArrowSolidDownIcon: be,
                ArrowSolidLeftIcon: Te,
                ArrowSolidRightIcon: _e,
                ArrowSolidUpIcon: Ae,
                ArrowUpIcon: ge,
                AzureDevOpsIcon: ye,
                BackIcon: Oe,
                BasketIcon: ke,
                BatchAcceptIcon: Be,
                BatchDenyIcon: fe,
                BeakerIcon: Re,
                BellIcon: Pe,
                BitbucketIcon: Le,
                BoldIcon: Ee,
                BookIcon: De,
                BookmarkHollowIcon: we,
                BookmarkIcon: Me,
                BottomBarIcon: ve,
                BottomBarToggleIcon: xe,
                BoxIcon: He,
                BranchIcon: Ue,
                BrowserIcon: Fe,
                ButtonIcon: Ne,
                CPUIcon: Ge,
                CalendarIcon: We,
                CameraIcon: Ke,
                CategoryIcon: Ye,
                CertificateIcon: Ve,
                ChangedIcon: qe,
                ChatIcon: Ze,
                CheckIcon: ze,
                ChevronDownIcon: Je,
                ChevronLeftIcon: Qe,
                ChevronRightIcon: $e,
                ChevronSmallDownIcon: je,
                ChevronSmallLeftIcon: Xe,
                ChevronSmallRightIcon: oc,
                ChevronSmallUpIcon: nc,
                ChevronUpIcon: ec,
                ChromaticIcon: cc,
                ChromeIcon: tc,
                CircleHollowIcon: rc,
                CircleIcon: Ic,
                ClearIcon: ac,
                CloseAltIcon: lc,
                CloseIcon: ic,
                CloudHollowIcon: sc,
                CloudIcon: uc,
                CogIcon: dc,
                CollapseIcon: mc,
                CommandIcon: pc,
                CommentAddIcon: Sc,
                CommentIcon: Cc,
                CommentsIcon: hc,
                CommitIcon: bc,
                CompassIcon: Tc,
                ComponentDrivenIcon: _c,
                ComponentIcon: Ac,
                ContrastIcon: gc,
                ControlsIcon: yc,
                CopyIcon: Oc,
                CreditIcon: kc,
                CrossIcon: Bc,
                DashboardIcon: fc,
                DatabaseIcon: Rc,
                DeleteIcon: Pc,
                DiamondIcon: Lc,
                DirectionIcon: Ec,
                DiscordIcon: Dc,
                DocChartIcon: wc,
                DocListIcon: Mc,
                DocumentIcon: vc,
                DownloadIcon: xc,
                DragIcon: Hc,
                EditIcon: Uc,
                EllipsisIcon: Fc,
                EmailIcon: Nc,
                ExpandAltIcon: Gc,
                ExpandIcon: Wc,
                EyeCloseIcon: Kc,
                EyeIcon: Yc,
                FaceHappyIcon: Vc,
                FaceNeutralIcon: qc,
                FaceSadIcon: Zc,
                FacebookIcon: zc,
                FailedIcon: Jc,
                FastForwardIcon: Qc,
                FigmaIcon: $c,
                FilterIcon: jc,
                FlagIcon: Xc,
                FolderIcon: ot,
                FormIcon: nt,
                GDriveIcon: et,
                GithubIcon: ct,
                GitlabIcon: tt,
                GlobeIcon: rt,
                GoogleIcon: It,
                GraphBarIcon: at,
                GraphLineIcon: lt,
                GraphqlIcon: it,
                GridAltIcon: st,
                GridIcon: ut,
                GrowIcon: dt,
                HeartHollowIcon: mt,
                HeartIcon: pt,
                HomeIcon: St,
                HourglassIcon: Ct,
                InfoIcon: ht,
                ItalicIcon: bt,
                JumpToIcon: Tt,
                KeyIcon: _t,
                LightningIcon: At,
                LightningOffIcon: gt,
                LinkBrokenIcon: yt,
                LinkIcon: Ot,
                LinkedinIcon: kt,
                LinuxIcon: Bt,
                ListOrderedIcon: ft,
                ListUnorderedIcon: Rt,
                LocationIcon: Pt,
                LockIcon: Lt,
                MarkdownIcon: Et,
                MarkupIcon: Dt,
                MediumIcon: wt,
                MemoryIcon: Mt,
                MenuIcon: vt,
                MergeIcon: xt,
                MirrorIcon: Ht,
                MobileIcon: Ut,
                MoonIcon: Ft,
                NutIcon: Nt,
                OutboxIcon: Gt,
                OutlineIcon: Wt,
                PaintBrushIcon: Kt,
                PaperClipIcon: Yt,
                ParagraphIcon: Vt,
                PassedIcon: qt,
                PhoneIcon: Zt,
                PhotoDragIcon: zt,
                PhotoIcon: Jt,
                PinAltIcon: Qt,
                PinIcon: $t,
                PlayBackIcon: jt,
                PlayIcon: Xt,
                PlayNextIcon: or,
                PlusIcon: nr,
                PointerDefaultIcon: er,
                PointerHandIcon: cr,
                PowerIcon: tr,
                PrintIcon: rr,
                ProceedIcon: Ir,
                ProfileIcon: ar,
                PullRequestIcon: lr,
                QuestionIcon: ir,
                RSSIcon: sr,
                RedirectIcon: ur,
                ReduxIcon: dr,
                RefreshIcon: mr,
                ReplyIcon: pr,
                RepoIcon: Sr,
                RequestChangeIcon: Cr,
                RewindIcon: hr,
                RulerIcon: h,
                SearchIcon: br,
                ShareAltIcon: Tr,
                ShareIcon: _r,
                ShieldIcon: Ar,
                SideBySideIcon: gr,
                SidebarAltIcon: yr,
                SidebarAltToggleIcon: Or,
                SidebarIcon: kr,
                SidebarToggleIcon: Br,
                SpeakerIcon: fr,
                StackedIcon: Rr,
                StarHollowIcon: Pr,
                StarIcon: Lr,
                StickerIcon: Er,
                StopAltIcon: Dr,
                StopIcon: wr,
                StorybookIcon: Mr,
                StructureIcon: vr,
                SubtractIcon: xr,
                SunIcon: Hr,
                SupportIcon: Ur,
                SwitchAltIcon: Fr,
                SyncIcon: Nr,
                TabletIcon: Gr,
                ThumbsUpIcon: Wr,
                TimeIcon: Kr,
                TimerIcon: Yr,
                TransferIcon: Vr,
                TrashIcon: qr,
                TwitterIcon: Zr,
                TypeIcon: zr,
                UbuntuIcon: Jr,
                UndoIcon: Qr,
                UnfoldIcon: $r,
                UnlockIcon: jr,
                UnpinIcon: Xr,
                UploadIcon: oI,
                UserAddIcon: nI,
                UserAltIcon: eI,
                UserIcon: cI,
                UsersIcon: tI,
                VSCodeIcon: rI,
                VerifiedIcon: II,
                VideoIcon: aI,
                WandIcon: lI,
                WatchIcon: iI,
                WindowsIcon: sI,
                WrenchIcon: uI,
                YoutubeIcon: dI,
                ZoomIcon: mI,
                ZoomOutIcon: pI,
                ZoomResetIcon: SI,
                iconList: CI,
            } = __STORYBOOK_ICONS__;
        var i = 'storybook/measure-addon',
            b = `${i}/tool`,
            T = () => {
                let [r, c] = p(),
                    { measureEnabled: I } = r,
                    s = S(),
                    a = u(() => c({ measureEnabled: !I }), [c, I]);
                return (
                    d(() => {
                        s.setAddonShortcut(i, {
                            label: 'Toggle Measure [M]',
                            defaultShortcut: ['M'],
                            actionName: 'measure',
                            showInMenu: !1,
                            action: a,
                        });
                    }, [a, s]),
                    t.createElement(
                        C,
                        { key: b, active: I, title: 'Enable measure', onClick: a },
                        t.createElement(h, null),
                    )
                );
            };
        l.register(i, () => {
            l.add(b, {
                type: m.TOOL,
                title: 'Measure',
                match: ({ viewMode: r, tabId: c }) => r === 'story' && !c,
                render: () => t.createElement(T, null),
            });
        });
    })();
} catch (e) {
    console.error('[Storybook] One of your manager-entries failed: ' + import.meta.url, e);
}
