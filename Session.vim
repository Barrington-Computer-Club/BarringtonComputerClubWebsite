let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/coding/Learning/astro/ComputerClubWebsite
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +3 src/pages/index.astro
badd +25 src/components/Header.astro
badd +14 src/components/ComputerClub/ComputerClubHeader.astro
badd +14 src/components/ComputerClub/NavigationItem.astro
badd +1 ~/coding/Learning/astro/ComputerClubWebsite
badd +5 src/config.ts
badd +15 src/pages/blog.astro
argglobal
%argdel
$argadd ~/coding/Learning/astro/ComputerClubWebsite
tabnew +setlocal\ bufhidden=wipe
tabrewind
edit src/components/ComputerClub/ComputerClubHeader.astro
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
balt src/pages/index.astro
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=99
setlocal fml=1
setlocal fdn=20
setlocal nofen
let s:l = 22 - ((21 * winheight(0) + 19) / 38)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 22
normal! 03|
lcd ~/coding/Learning/astro/ComputerClubWebsite
tabnext
edit diffview:///home/felix/coding/Learning/astro/ComputerClubWebsite/.git/105f7507fe1/src/components/ComputerClub/ComputerClubHeader.astro
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
wincmd =
argglobal
setlocal fdm=diff
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 1 - ((0 * winheight(0) + 19) / 38)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
lcd ~/coding/Learning/astro/ComputerClubWebsite
wincmd w
argglobal
if bufexists(fnamemodify("diffview:///home/felix/coding/Learning/astro/ComputerClubWebsite/.git/:0:/src/components/ComputerClub/ComputerClubHeader.astro", ":p")) | buffer diffview:///home/felix/coding/Learning/astro/ComputerClubWebsite/.git/:0:/src/components/ComputerClub/ComputerClubHeader.astro | else | edit diffview:///home/felix/coding/Learning/astro/ComputerClubWebsite/.git/:0:/src/components/ComputerClub/ComputerClubHeader.astro | endif
if &buftype ==# 'terminal'
  silent file diffview:///home/felix/coding/Learning/astro/ComputerClubWebsite/.git/:0:/src/components/ComputerClub/ComputerClubHeader.astro
endif
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=99
setlocal fml=1
setlocal fdn=20
setlocal nofen
let s:l = 1 - ((0 * winheight(0) + 19) / 38)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
lcd ~/coding/Learning/astro/ComputerClubWebsite
wincmd w
2wincmd w
wincmd =
tabnext 2
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
let g:this_session = v:this_session
let g:this_obsession = v:this_session
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
