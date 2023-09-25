let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/coding/LargerIdeas/ComputerClubWebsite
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +8 tsconfig.json
badd +31 src/components/header.tsx
badd +10 src/content/config.ts
badd +23 src/pages/presentations.astro
badd +5 src/content/presentations/react-basics.md
badd +5 src/content/presentations/using-git.md
badd +4 src/content/presentations/using-gpts.md
badd +4 src/content/presentations/using-gpts6.md
badd +4 ~/coding/LargerIdeas/ComputerClubWebsite/src/content/presentations/database-basics.md
badd +4 ~/coding/LargerIdeas/ComputerClubWebsite/src/content/presentations/configuring-your-text-editor.md
badd +7 ~/coding/LargerIdeas/ComputerClubWebsite/src/pages/events.astro
badd +23 src/pages/index.astro
badd +23 ~/coding/LargerIdeas/ComputerClubWebsite/src/components/calendar.tsx
badd +54 package.json
badd +12 astro.config.mjs
argglobal
%argdel
$argadd astro.config.mjs
edit src/components/header.tsx
argglobal
balt src/pages/presentations.astro
setlocal fdm=expr
setlocal fde=nvim_treesitter#foldexpr()
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=99
setlocal fml=1
setlocal fdn=99
setlocal fen
21
normal! zo
22
normal! zo
26
normal! zo
28
normal! zo
let s:l = 31 - ((16 * winheight(0) + 20) / 40)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 31
normal! 080|
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
