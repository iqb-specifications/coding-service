from pydantic import BaseModel, StrictStr
from typing import Optional

from .chunk_type import ChunkType


class DataChunk(BaseModel):
    id: StrictStr
    type: ChunkType
    label: Optional[StrictStr] = None
